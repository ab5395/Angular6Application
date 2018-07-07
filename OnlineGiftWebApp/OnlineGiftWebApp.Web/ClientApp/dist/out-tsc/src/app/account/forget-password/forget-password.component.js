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
var forgetpassword_model_1 = require("./forgetpassword.model");
var forgetpassword_service_1 = require("./forgetpassword.service");
var app_config_1 = require("../../app.config");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var notification_service_1 = require("../../shared/services/notification.service");
//import { ErrorData } from '../error/error.data';
var AppRoute_1 = require("../../shared/AppRoute");
var ForgetPasswordComponent = /** @class */ (function () {
    function ForgetPasswordComponent(formBuilder, forgetPasswordService, _router, snb) {
        this.formBuilder = formBuilder;
        this.forgetPasswordService = forgetPasswordService;
        this._router = _router;
        this.snb = snb;
        this.appConfig = new app_config_1.AppConfig();
        this.isProgressVisible = false;
        this.isBtnDisabled = false;
        this.notificationService = new notification_service_1.NotificationService(snb);
        this.frmForgetPassword = this.formBuilder.group({
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]]
        });
    }
    ForgetPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgetPasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        var model = new forgetpassword_model_1.ForgetPasswordModel();
        model.email = this.frmForgetPassword.value.email;
        if (this.frmForgetPassword.dirty && this.frmForgetPassword.valid) {
            this.isProgressVisible = true;
            this.isBtnDisabled = true;
            this.forgetPasswordService.doForgetPassword(model).subscribe(function (result) {
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
    ForgetPasswordComponent = __decorate([
        core_1.Component({
            selector: 'app-forget-password',
            templateUrl: './forget-password.component.html',
            styleUrls: ['./forget-password.component.css'],
            providers: [forgetpassword_service_1.ForgetPasswordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            forgetpassword_service_1.ForgetPasswordService,
            router_1.Router,
            material_1.MatSnackBar])
    ], ForgetPasswordComponent);
    return ForgetPasswordComponent;
}());
exports.ForgetPasswordComponent = ForgetPasswordComponent;
//# sourceMappingURL=forget-password.component.js.map