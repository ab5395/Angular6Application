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
var forms_1 = require("@angular/forms");
var CompareDirective = /** @class */ (function () {
    function CompareDirective(comparer, parent) {
        this.comparer = comparer;
        this.parent = parent;
    }
    CompareDirective_1 = CompareDirective;
    CompareDirective.prototype.validate = function (c) {
        var e = c.root.get(this.comparer);
        // value not equal in verify control
        if (e && c.value !== e.value && !this.isParent) {
            return { "compare": true };
        }
        // user typing in password and match
        if (e && c.value === e.value && this.isParent) {
            delete e.errors['compare'];
            if (!Object.keys(e.errors).length)
                e.setErrors(null);
        }
        // user typing in password and mismatch
        if (e && c.value !== e.value && this.isParent) {
            e.setErrors({ "compare": true });
        }
    };
    Object.defineProperty(CompareDirective.prototype, "isParent", {
        get: function () {
            if (!this.parent)
                return false;
            return this.parent === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    CompareDirective = CompareDirective_1 = __decorate([
        core_1.Directive({
            selector: '[advs-compare]',
            providers: [{ provide: forms_1.NG_VALIDATORS, useExisting: CompareDirective_1, multi: true }]
        }),
        __param(0, core_1.Attribute('advs-compare')),
        __param(1, core_1.Attribute('parent')),
        __metadata("design:paramtypes", [String, String])
    ], CompareDirective);
    return CompareDirective;
    var CompareDirective_1;
}());
exports.CompareDirective = CompareDirective;
//# sourceMappingURL=passwordvalidator.directive.js.map