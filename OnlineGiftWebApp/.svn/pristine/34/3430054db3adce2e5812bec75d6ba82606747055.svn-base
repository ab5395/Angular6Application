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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var login_service_1 = require("../../account/login/login.service");
var app_config_1 = require("../../app.config");
var AppRoute_1 = require("../../shared/AppRoute");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, document, service) {
        this.router = router;
        this.document = document;
        this.service = service;
        this.appConfig = new app_config_1.AppConfig();
        this.isLoggedIn = false;
        this.isProgressVisible = false;
        this.isBtnDisabled = false;
        this.loginUrl = AppRoute_1.AppRoute.login;
        this.registerUrl = AppRoute_1.AppRoute.register;
        this.navIsFixed = false;
    }
    HeaderComponent.prototype.onWindowScroll = function () {
        var number = window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop || 0;
        if (number > 50) {
            this.navIsFixed = true;
        }
        else if (this.navIsFixed && number < 10) {
            this.navIsFixed = false;
        }
    };
    // constructor() { }
    HeaderComponent.prototype.ngOnInit = function () {
        this.verifyLogin();
    };
    HeaderComponent.prototype.verifyLogin = function () {
        var _this = this;
        this.isBtnDisabled = false;
        this.currUser = this.appConfig.getCurrentUser();
        if (this.currUser === null) {
            this.isProgressVisible = false;
            this.isLoggedIn = false;
        }
        else {
            this.isProgressVisible = true;
            this.service.checkAlreadyLoggedIn().subscribe(function (res) {
                console.log(res);
                if (res.status === true) {
                    _this.isLoggedIn = true;
                }
                else {
                    _this.isLoggedIn = false;
                    _this.router.navigateByUrl(AppRoute_1.AppRoute.homeP);
                }
                _this.isProgressVisible = false;
            });
        }
    };
    HeaderComponent.prototype.onLogout = function () {
        var _this = this;
        this.isProgressVisible = true;
        this.isBtnDisabled = true;
        this.service.doLogout().subscribe(function (res) {
            _this.appConfig.removeCurrentUser();
            if (res.status === true) {
                _this.isBtnDisabled = true;
                _this.verifyLogin();
            }
        });
    };
    __decorate([
        core_1.HostListener('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css'],
            providers: [login_service_1.LoginService]
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
        __metadata("design:paramtypes", [router_1.Router, Object, login_service_1.LoginService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map