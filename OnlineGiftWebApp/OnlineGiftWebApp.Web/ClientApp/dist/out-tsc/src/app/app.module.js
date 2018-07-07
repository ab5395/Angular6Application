"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var material_module_1 = require("./material.module");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
//import { TokenInterceptor } from './shared/t';
var ngx_owl_carousel_1 = require("ngx-owl-carousel");
var flex_layout_1 = require("@angular/flex-layout");
var scrolling_1 = require("@angular/cdk/scrolling");
var ngx_perfect_scrollbar_1 = require("ngx-perfect-scrollbar");
var ngx_perfect_scrollbar_2 = require("ngx-perfect-scrollbar");
var app_routing_module_1 = require(".//app-routing.module");
var core_2 = require("@agm/core");
var environment_1 = require("../environments/environment");
var token_interceptor_1 = require("./shared/token.interceptor");
var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
/**Components **/
var user_component_1 = require("./layout/user/user.component");
var admin_component_1 = require("./layout/admin/admin.component");
var common_component_1 = require("./layout/common/common.component");
var home_component_1 = require("./user/home/home.component");
var aboutus_component_1 = require("./user/aboutus/aboutus.component");
var contactus_component_1 = require("./user/contactus/contactus.component");
var header_component_1 = require("./user/header/header.component");
var footer_component_1 = require("./user/footer/footer.component");
var login_component_1 = require("./account/login/login.component");
var register_component_1 = require("./account/register/register.component");
var forget_password_component_1 = require("./account/forget-password/forget-password.component");
var reset_password_component_1 = require("./account/reset-password/reset-password.component");
var my_account_component_1 = require("./user/my-account/my-account.component");
var mygift_component_1 = require("./user/mygift/mygift.component");
var expresslove_component_1 = require("./user/expresslove/expresslove.component");
var validation_message_component_1 = require("./shared/component/validation.message.component");
var registersuccess_component_1 = require("./account/registersuccess/registersuccess.component");
var confirmaccount_component_1 = require("./account/confirmaccount/confirmaccount.component");
/*Eof : Components*/
/*Directory */
var passwordvalidator_directive_1 = require("./shared/directives/passwordvalidator.directive");
/*Eof : Directory*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                user_component_1.UserComponent,
                admin_component_1.AdminComponent,
                common_component_1.CommonComponent,
                home_component_1.HomeComponent,
                aboutus_component_1.AboutusComponent,
                contactus_component_1.ContactusComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                forget_password_component_1.ForgetPasswordComponent,
                reset_password_component_1.ResetPasswordComponent,
                my_account_component_1.MyAccountComponent,
                mygift_component_1.MygiftComponent,
                expresslove_component_1.ExpressloveComponent,
                validation_message_component_1.ControlMessagesComponent,
                passwordvalidator_directive_1.CompareDirective,
                registersuccess_component_1.RegistersuccessComponent,
                confirmaccount_component_1.ConfirmaccountComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                common_1.CommonModule,
                material_module_1.MaterialModule,
                ngx_owl_carousel_1.OwlModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_2.HttpClientModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                flex_layout_1.FlexLayoutModule,
                scrolling_1.ScrollDispatchModule,
                ngx_perfect_scrollbar_1.PerfectScrollbarModule,
                app_routing_module_1.AppRoutingModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: environment_1.environment.googleApiKey,
                    libraries: ["places"]
                })
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar_2.PERFECT_SCROLLBAR_CONFIG,
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                },
                {
                    provide: http_2.HTTP_INTERCEPTORS,
                    useClass: token_interceptor_1.TokenInterceptor,
                    multi: true
                },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map