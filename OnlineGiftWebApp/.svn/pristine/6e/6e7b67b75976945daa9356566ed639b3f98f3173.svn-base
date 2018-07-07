import { MatSnackBar } from "@angular/material";

export class NotificationService {
    public verticalPosition: any = "top";
    public horizontalPosition: any = "center";
    public duration: number = 5000;
    public direction: any = "ltr";
    public action: string = undefined;

    constructor(public snackBar: MatSnackBar) { }

    showNotification(message: string) {
        this.snackBar.open(message, this.action, { duration: this.duration, verticalPosition: this.verticalPosition, horizontalPosition: this.horizontalPosition, direction: this.direction});
        this.resetParams();
    }

    resetParams() {
        this.verticalPosition = "top";
        this.horizontalPosition = "center";
        this.duration = 5000;
        this.direction = "ltr";
        this.action = undefined;
    }
}