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
var core_2 = require("@agm/core");
var forms_1 = require("@angular/forms");
var validation_service_1 = require("../../shared/services/validation.service");
var register_model_1 = require("./register.model");
var register_service_1 = require("./register.service");
var app_config_1 = require("../../app.config");
var router_1 = require("@angular/router");
var material_1 = require("@angular/material");
var notification_service_1 = require("../../shared/services/notification.service");
//import { ErrorData } from '../error/error.data';
var AppRoute_1 = require("../../shared/AppRoute");
var location_helper_1 = require("../../shared/location.helper");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(mapsApiLoader, ngZone, formBuilder, registerService, _router, snb) {
        this.mapsApiLoader = mapsApiLoader;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.registerService = registerService;
        this._router = _router;
        this.snb = snb;
        this.isBtnDisabled = false;
        this.appConfig = new app_config_1.AppConfig();
        this.isProgressVisible = false;
        this.locationObject = {};
        this.notificationService = new notification_service_1.NotificationService(snb);
        this.frmRegister = this.formBuilder.group({
            'username': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'password': ['', [forms_1.Validators.required, validation_service_1.ValidationService.passwordValidator]],
            'confirmPassword': ['', [forms_1.Validators.required]],
            'location': ['', [forms_1.Validators.required]],
            'firstName': ['', [forms_1.Validators.required]],
            'lastName': ['', [forms_1.Validators.required]]
        });
        this.appConfig.removeCurrentUser();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        //let place: google.maps.places.PlaceResult;
        this.mapsApiLoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: []
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    _this.locationObject = location_helper_1.LocationHelper.prepareLocationData((place));
                    console.log(_this.locationObject);
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                });
            });
        });
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        var model = new register_model_1.RegisterModel();
        model.username = this.frmRegister.value.username;
        model.password = this.frmRegister.value.password;
        model.firstName = this.frmRegister.value.firstName;
        model.lastName = this.frmRegister.value.lastName;
        model.location = this.frmRegister.value.location;
        model.role = "User";
        if (this.frmRegister.dirty && this.frmRegister.valid) {
            this.isProgressVisible = true;
            this.isBtnDisabled = true;
            this.registerService.doRegister(model).subscribe(function (result) {
                debugger;
                _this.isProgressVisible = false;
                _this.isBtnDisabled = false;
                if (result.status === true) {
                    // this.notificationService.showNotification("User Created Successfully.Please Check your Email to confirm your account.");
                    _this._router.navigateByUrl(AppRoute_1.AppRoute.registersuccess);
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
    __decorate([
        core_1.ViewChild("search"),
        __metadata("design:type", core_1.ElementRef)
    ], RegisterComponent.prototype, "searchElementRef", void 0);
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.css'],
            providers: [register_service_1.RegisterService]
        }),
        __metadata("design:paramtypes", [core_2.MapsAPILoader,
            core_1.NgZone,
            forms_1.FormBuilder,
            register_service_1.RegisterService,
            router_1.Router,
            material_1.MatSnackBar])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map