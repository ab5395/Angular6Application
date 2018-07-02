

namespace OnlineGiftWebApp.Web.Models
{
    using Microsoft.AspNetCore.Mvc;

    public class JsonResponse
    {
        public IActionResult GenerateJsonResult(bool status, string message = null, object data = null)
        {
            return new JsonResult(new JsonResponseHelper()
            {
                Status = status,
                Data = data,
                Message = message
            });
        }
    }

    public class JsonResponseHelper
    {


        public bool Status { get; set; }
        public string Message { get; set; }
        public object Data { get; set; }
    }
}
