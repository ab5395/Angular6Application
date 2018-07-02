
namespace OnlineGiftWebApp.Web.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Authorization;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.Extensions.Options;
    using OnlineGiftWebApp.Data;
    using OnlineGiftWebApp.Services.Utils;
    using OnlineGiftWebApp.TokenHelper;
    using OnlineGiftWebApp.Web.Models;

    [Produces("application/json")]
    public class AccountController : Controller
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly JsonResponse _jsonResponse;
        private readonly EmailService _emailService;
        private readonly IHttpContextAccessor _httpContext;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, RoleManager<IdentityRole> roleManager, IHttpContextAccessor httpContext, IOptions<EmailSettings> emailSettings)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _jsonResponse = new JsonResponse();
            _httpContext = httpContext;
            _emailService = new EmailService(emailSettings);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("/Register")]
        public async Task<IActionResult> Register([FromBody]RegisterModel registerModel)
        {
            try
            {
                var stringList=new List<string>(){"Admin","User"};
                foreach (var item in stringList){
                    await _roleManager.CreateAsync(new IdentityRole(item));
                }
                var user = await _userManager.FindByEmailAsync(registerModel.Username);
                if (user != null)
                {
                    return _jsonResponse.GenerateJsonResult(true, "User already registered.");
                }
                user = new User()
                {
                    Email = registerModel.Username,
                    UserName = registerModel.Username,
                    FirstName = registerModel.FirstName,
                    LastName = registerModel.LastName,
                    Address = registerModel.Location
                };

                var result = await _userManager.CreateAsync(user, registerModel.Password);
                if (!result.Succeeded)
                {
                    return _jsonResponse.GenerateJsonResult(true, result.Errors.FirstOrDefault()?.Description.ToLower());
                }
                await _userManager.AddToRoleAsync(user, registerModel.Role);

                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                var mailContent = PrepareConfirmEmailTemplate(user.Email, code);
                await _emailService.SendMailAsync(registerModel.FirstName + " " + registerModel.LastName, user.Email, "", "Pyarrana- Confirm Email", mailContent, "");

                return _jsonResponse.GenerateJsonResult(true, "User creatred successfully.");
            }
            catch (Exception ex)
            {
                var error = new
                {
                    ErrorMessage = ex.Message,
                    InnerMessage = ex.InnerException?.Message,
                    //ex.StackTrace
                };
                return _jsonResponse.GenerateJsonResult(false, "Unhandled error occured", error);
            }
        }

        // private async Task<string> PrepareConfirmEmailTemplate(string email, string code)
        private string PrepareConfirmEmailTemplate(string email, string code)
        {
            //var templateStr = "";

            var currHttpScheme = _httpContext.HttpContext.Request.Scheme;
            var currHost = _httpContext.HttpContext.Request.Host.Value;
            var currHostUrl = currHttpScheme + "://" + currHost;

            var confirmEmailRouteUrlPart = "/#/account/confirmemail?email=[email]&code=[code]";
            var logoUrlPart = "/assets/images/modelrecslogo.png";
            var bgimgUrlPart = "/assets/images/email-bg.png";

            var callbackUrl = "javascript:void(0)";
            if (!string.IsNullOrEmpty(code) && !string.IsNullOrEmpty(email))
            {
                callbackUrl =
                    currHostUrl +
                    confirmEmailRouteUrlPart
                        .Replace("[email]", WebUtility.UrlEncode(email))
                        .Replace("[code]", WebUtility.UrlEncode(code));
            }

            var logourl = currHostUrl + logoUrlPart;
            var bgimgurl = currHostUrl + bgimgUrlPart;

            //            templateStr = "<a  href='[verifyaccounturl]' " + "target='_blank' " + "style=\"font-size:14px; line-height:14px; font-weight:500; font-family:'Roboto',monospace; color:#ffffff; text-decoration:none; border-radius:2px; padding:10px 25px; border:1px solid #12a3b4; display:inline-block; box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.24), 0 0 2px 0 rgba(0, 0, 0, 0.12);\"" + ">VERIFY ACCOUNT</a>";


            return callbackUrl;
        }


        [AllowAnonymous]
        [HttpGet]
        [Route("ConfirmEmail")]
        public async Task<IActionResult> ConfirmEmail([FromQuery]string email, string code)
        {
            if (string.IsNullOrEmpty(email) || code == null)
                return _jsonResponse.GenerateJsonResult(false, "Email not found");

            var user = await _userManager.FindByEmailAsync(email);

            code = WebUtility.UrlDecode(code);
            code = code.Replace(' ', '+');

            var result = await _userManager.ConfirmEmailAsync(user, code);
            var responseData = new ConfirmEmailResponseModel();
            if (result.Succeeded)
            {
                var resetCode = _userManager.GeneratePasswordResetTokenAsync(user).Result;
                responseData.Email = user.Email;
                responseData.ResetCode = resetCode;
            }

            if (!result.Succeeded)
                return _jsonResponse.GenerateJsonResult(false, "Link expired");
            else
                return _jsonResponse.GenerateJsonResult(true, "Email confirmed successfully", responseData);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route("SetPassword")]
        public async Task<IActionResult> SetPassword([FromBody]SetPasswordViewModel model)
        {
            if (!ModelState.IsValid)
                return _jsonResponse.GenerateJsonResult(false, "invalid model");

            var user = await _userManager.FindByEmailAsync(model.Email);
            if (user == null)
                return _jsonResponse.GenerateJsonResult(false, "user not found");

            user.UserName = model.UserName;

            var result = await _userManager.ResetPasswordAsync(user, model.Code, model.Password);
            if (result.Succeeded)
            {
                return _jsonResponse.GenerateJsonResult(true, "password successfully changed.");
            }
            else if (result.Errors.Any())
                return _jsonResponse.GenerateJsonResult(false, "some error occured", result.Errors);

            return _jsonResponse.GenerateJsonResult(false, "link expired");
        }


        [HttpPost]
        [AllowAnonymous]
        [Route("/Login")]
        public async Task<IActionResult> Login([FromBody]LoginModel inputModel)
        {
            try
            {
                if (inputModel == null || string.IsNullOrEmpty(inputModel.Email) || string.IsNullOrEmpty(inputModel.Password))
                {
                    return _jsonResponse.GenerateJsonResult(false, "Login Failed", "No data found.");
                }

                var result = await _signInManager.PasswordSignInAsync(inputModel.Email, inputModel.Password, false, false);

                if (!result.Succeeded)
                {
                    return _jsonResponse.GenerateJsonResult(false, "Login Failed", "Invalid username or password");
                }

                var user = await _userManager.FindByEmailAsync(inputModel.Email);

                var roles = await _userManager.GetRolesAsync(user);

                var tokenBuilder = new JwtTokenBuilder()
                                    .AddSecurityKey(JwtSecurityKey.Create())
                                    .AddSubject("token authentication")
                                    .AddIssuer("Fiver.Security.Bearer")
                                    .AddAudience("Fiver.Security.Bearer")
                                    .AddClaim("MembershipId", "111", roles)
                                    .AddExpiry(3600)
                                    .Build();
                var token = new
                {
                    Token = tokenBuilder.Value,
                    Validity = tokenBuilder.ValidTo
                };
                return _jsonResponse.GenerateJsonResult(true, "Login Successfully", token);
            }
            catch (Exception ex)
            {
                var error = new
                {
                    ErrorMessage = ex.Message,
                    InnerMessage = ex.InnerException?.Message,
                    //ex.StackTrace
                };
                return _jsonResponse.GenerateJsonResult(false, "Login Failed", error);
            }
        }
    }
}