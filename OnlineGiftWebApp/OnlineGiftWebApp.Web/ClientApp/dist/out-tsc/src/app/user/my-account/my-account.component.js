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
var MyAccountComponent = /** @class */ (function () {
    function MyAccountComponent() {
        this.genders = [
            { value: 'Male', viewValue: 'Male' },
            { value: 'Female', viewValue: 'Female' }
        ];
        this.citys = [
            { value: 'Surat', viewValue: 'Surat' },
            { value: 'Ahemadabad', viewValue: 'Ahemadabad' },
            { value: 'Rajkot', viewValue: 'Rajkot' },
        ];
        this.states = [
            { value: 'Gujarat', viewValue: 'Gujarat' },
            { value: 'Kerla', viewValue: 'kerla' },
            { value: 'Madhyapradesh', viewValue: 'Madhya pradesh' }
        ];
        this.countrys = [
            { value: 'India', viewValue: 'India' },
            { value: 'UK', viewValue: 'U.K.' },
        ];
    }
    MyAccountComponent.prototype.ngOnInit = function () {
    };
    MyAccountComponent = __decorate([
        core_1.Component({
            selector: 'app-my-account',
            templateUrl: './my-account.component.html',
            styleUrls: ['./my-account.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MyAccountComponent);
    return MyAccountComponent;
}());
exports.MyAccountComponent = MyAccountComponent;
//# sourceMappingURL=my-account.component.js.map