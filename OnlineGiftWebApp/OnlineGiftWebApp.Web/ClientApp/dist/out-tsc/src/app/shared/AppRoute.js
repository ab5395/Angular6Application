"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppRoute = /** @class */ (function () {
    function AppRoute() {
    }
    AppRoute.prefix = "/#/";
    //Without prefix
    /*User Route*/
    AppRoute.home = "home";
    AppRoute.aboutus = "aboutus";
    AppRoute.contactus = "contactus";
    AppRoute.myaccount = "myaccount";
    AppRoute.mygift = "mygift";
    AppRoute.expresslove = "expresslove";
    /*Account Route*/
    AppRoute.login = "account/login";
    AppRoute.register = "account/register";
    AppRoute.resetpassword = "account/resetpassword";
    AppRoute.forgetpassword = "account/forgetpassword";
    AppRoute.registersuccess = "account/registersuccess";
    AppRoute.confirmaccount = "account/confirmaccount";
    //With prefix
    /*User Route*/
    AppRoute.homeP = AppRoute.prefix + AppRoute.home;
    AppRoute.contactusP = AppRoute.prefix + AppRoute.contactus;
    AppRoute.aboutusP = AppRoute.prefix + AppRoute.aboutus;
    AppRoute.myaccountP = AppRoute.prefix + AppRoute.myaccount;
    AppRoute.mygiftP = AppRoute.prefix + AppRoute.mygift;
    AppRoute.expressloveP = AppRoute.prefix + AppRoute.expresslove;
    /*Account Route*/
    AppRoute.loginP = AppRoute.prefix + AppRoute.login;
    AppRoute.resgiterP = AppRoute.prefix + AppRoute.register;
    AppRoute.resetpasswordP = AppRoute.prefix + AppRoute.resetpassword;
    AppRoute.forgetpasswordP = AppRoute.prefix + AppRoute.forgetpassword;
    AppRoute.registersuccessP = AppRoute.prefix + AppRoute.registersuccess;
    AppRoute.confirmaccountP = AppRoute.prefix + AppRoute.confirmaccount;
    return AppRoute;
}());
exports.AppRoute = AppRoute;
//# sourceMappingURL=AppRoute.js.map