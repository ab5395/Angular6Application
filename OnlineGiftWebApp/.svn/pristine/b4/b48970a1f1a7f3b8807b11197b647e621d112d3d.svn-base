"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var curruser_model_1 = require("./shared/models/curruser.model");
var role_enum_1 = require("./shared/models/role.enum");
var AppConfig = /** @class */ (function () {
    function AppConfig() {
    }
    AppConfig.prototype.getAuthHeader = function () {
        var currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.token) {
            var header = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new http_1.RequestOptions({ headers: header });
        }
        else {
            return null;
        }
    };
    AppConfig.prototype.getToken = function () {
        var currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.token) {
            return currentUser.token;
        }
        else {
            return "";
        }
    };
    AppConfig.prototype.getCurrentUserId = function () {
        var currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.id) {
            return currentUser.id;
        }
        else {
            return null;
        }
    };
    AppConfig.prototype.getCurrentUser = function () {
        var currentUserObj = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUserObj) {
            var currUser = new curruser_model_1.CurrUser();
            currUser.email = currentUserObj.email;
            currUser.fullName = currentUserObj.fullName;
            currUser.role = role_enum_1.Role[role_enum_1.Role[currentUserObj.roleId]];
            currUser.username = currentUserObj.username;
            currUser.id = currentUserObj.id;
            return currUser;
        }
        else {
            return null;
        }
    };
    AppConfig.prototype.setCurrentUser = function (model) {
        localStorage.setItem('currentUser', JSON.stringify(model));
    };
    AppConfig.prototype.removeCurrentUser = function () {
        localStorage.removeItem('currentUser');
    };
    return AppConfig;
}());
exports.AppConfig = AppConfig;
;
//# sourceMappingURL=app.config.js.map