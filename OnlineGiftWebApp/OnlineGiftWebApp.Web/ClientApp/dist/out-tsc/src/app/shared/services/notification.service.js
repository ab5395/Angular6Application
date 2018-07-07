"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NotificationService = /** @class */ (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
        this.verticalPosition = "top";
        this.horizontalPosition = "center";
        this.duration = 5000;
        this.direction = "ltr";
        this.action = undefined;
    }
    NotificationService.prototype.showNotification = function (message) {
        this.snackBar.open(message, this.action, { duration: this.duration, verticalPosition: this.verticalPosition, horizontalPosition: this.horizontalPosition, direction: this.direction });
        this.resetParams();
    };
    NotificationService.prototype.resetParams = function () {
        this.verticalPosition = "top";
        this.horizontalPosition = "center";
        this.duration = 5000;
        this.direction = "ltr";
        this.action = undefined;
    };
    return NotificationService;
}());
exports.NotificationService = NotificationService;
//# sourceMappingURL=notification.service.js.map