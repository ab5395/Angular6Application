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
var resetpassword_model_1 = require("./resetpassword.model");
var resetpassword_service_1 = require("./resetpassword.service");
var app_config_1 = require("../../app.config");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var notification_service_1 = require("../../shared/services/notification.service");
//import { ErrorData } from '../error/error.data';
var AppRoute_1 = require("../../shared/AppRoute");
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(formBuilder, resetPasswordService, _router, snb, route) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.resetPasswordService = resetPasswordService;
        this._router = _router;
        this.snb = snb;
        this.route = route;
        this.appConfig = new app_config_1.AppConfig();
        this.isProgressVisible = false;
        this.isBtnDisabled = false;
        this.notificationService = new notification_service_1.NotificationService(snb);
        this.frmResetPassword = this.formBuilder.group({
            'password': ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]],
            'confirmPassword': ['', [forms_1.Validators.required]],
        });
        this.route.queryParams.subscribe(function (params) {
            _this.email = params['email'];
            _this.code = params['code'];
        });
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.email && this.code) {
            this.resetPasswordService.doResetPassword(this.email, this.code).subscribe(function (result) {
                if (result.status == true)
                    _this.linkExpired = false;
                else
                    _this.linkExpired = true;
            });
        }
    };
    ResetPasswordComponent.prototype.resetPassword = function () {
        var _this = this;
        var model = new resetpassword_model_1.ResetPasswordModel();
        model.email = this.email;
        model.code = this.code;
        model.password = this.frmResetPassword.value.password;
        if (this.frmResetPassword.dirty && this.frmResetPassword.valid) {
            this.isProgressVisible = true;
            this.isBtnDisabled = true;
            this.resetPasswordService.doSetPassword(model).subscribe(function (result) {
                _this.isProgressVisible = false;
                _this.isBtnDisabled = false;
                if (result.status === true) {
                    _this.notificationService.showNotification(result.message);
                    _this._router.navigateByUrl(AppRoute_1.AppRoute.login);
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
    ResetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.css'],
            providers: [resetpassword_service_1.ResetPasswordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            resetpassword_service_1.ResetPasswordService,
            router_1.Router,
            material_1.MatSnackBar,
            router_1.ActivatedRoute])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
exports.ResetPasswordComponent = ResetPasswordComponent;
//# sourceMappingURL=reset-password.component.js.map