using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OnlineGiftWebApp.Web.Models
{
    public class AccountMessage
    {
        public static string AlreadyRegisterd = "The email you have entered, is already exists. Please try another emailid.";
        public static string NotRegistered = "User not created, Please try again";
        public static string RegisterSuccessfully = "User registered successfully, Please check your email to confirm your account";
        public static string RegisterEmailNotSent = "User is successfully created but we failed to sent email. Please contact administrator for help";
        public static string InvalidLogin = "Login Failed.Invalid username or password";
        public static string ConfirmEmail = "Please confirm your account";
        public static string AccountClosed = "Your account is closed";
        public static string LoginSuccessfully = "Login successfully";
        public static string AlreadyLogin = "Already loggedin";
        public static string EmailNotFound = "User not found";
        public static string EmailConfirm= "Email confirm successfully";
        public static string EmailResetPassword="Please Check your Email to reset your password";
        public static string PasswordChanged = "Password successfully changed";
        public static string PasswordNotChanged = "Password has not been changed, Please try again later";
        public static string LogoutSuccessfully = "Logout successfully";
    }

    public class ErrorMessage
    {
        public static string UnhandledError = "Unhandled error occured, Please try again later";
        public static string InvalidModel = "Model is not valid";
        public static string InvalidLink = "Link you tried to access is invalid";
        public static string LinkExpired = "Link you tried to access is expired";
    }
}
