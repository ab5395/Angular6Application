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
var MygiftComponent = /** @class */ (function () {
    function MygiftComponent() {
        this.foods = [
            { value: 'Newestt Gift', viewValue: 'Newestt Gift' },
            { value: 'Best Gift', viewValue: 'Best Gift' },
            { value: 'most Sending', viewValue: 'most Sending' }
        ];
        this.countrys = [
            { value: 'USA', viewValue: 'USA' },
            { value: 'India', viewValue: 'India' },
            { value: 'Russia', viewValue: 'Russia' }
        ];
    }
    MygiftComponent.prototype.ngOnInit = function () {
    };
    MygiftComponent = __decorate([
        core_1.Component({
            selector: 'app-mygift',
            templateUrl: './mygift.component.html',
            styleUrls: ['./mygift.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], MygiftComponent);
    return MygiftComponent;
}());
exports.MygiftComponent = MygiftComponent;
//# sourceMappingURL=mygift.component.js.map