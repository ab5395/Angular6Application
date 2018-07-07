"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../../shared/services/validation.service");
var login_model_1 = require("./login.model");
var login_service_1 = require("./login.service");
var app_config_1 = require("../../app.config");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var notification_service_1 = require("../../shared/services/notification.service");
var role_enum_1 = require("../../shared/models/role.enum");
//import { ErrorData } from '../error/error.data';
var AppRoute_1 = require("../../shared/AppRoute");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, _router, snb) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this._router = _router;
        this.snb = snb;
        this.appConfig = new app_config_1.AppConfig();
        this.isProgressVisible = false;
        this.isBtnDisabled = false;
        this.notificationService = new notification_service_1.NotificationService(snb);
        this.frmLogin = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required]]
        });
        this.appConfig.removeCurrentUser();
    }
    LoginComponent.prototype.ngOnInit = function () {
        document.documentElement.setAttribute('data-agent', navigator.userAgent);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var model = new login_model_1.LoginModel();
        model.email = this.frmLogin.value.email;
        model.password = this.frmLogin.value.password;
        if (this.frmLogin.dirty && this.frmLogin.valid) {
            this.isProgressVisible = true;
            this.isBtnDisabled = true;
            this.loginService.doLogin(model).subscribe(function (result) {
                _this.isProgressVisible = false;
                _this.isBtnDisabled = false;
                if (result.status === true) {
                    _this.appConfig.setCurrentUser(result.data);
                    var currUser = _this.appConfig.getCurrentUser();
                    if (currUser != null && currUser.role === role_enum_1.Role.User)
                        _this._router.navigate([AppRoute_1.AppRoute.home]);
                    else
                        _this._router.navigate([AppRoute_1.AppRoute.home]);
                }
                else if (result.status === false) {
                    _this.notificationService.showNotification(result.message);
                }
                else {
                    _this.notificationService.showNotification("Some error occured while processing your request!! Please try again");
                }
            });
        }
        ;
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css'],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            login_service_1.LoginService,
            router_1.Router,
            material_1.MatSnackBar])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map