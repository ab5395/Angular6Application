import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from "../services/validation.service";

@Component({
    selector: 'control-messages',
    //template: `<mat-error *ngIf="errorMessage !== null">{{errorMessage}}</mat-error>`
    template: `<span  *ngIf="errorMessage !== null">{{errorMessage}}</span>`
})
export class ControlMessagesComponent {
    @Input()
    control: FormControl;

    @Input()
    msg: string;

    get errorMessage() {
        let error: any = this.control.errors;
        if (error != null) {
            for (let propertyName in error) {
                if (error.hasOwnProperty(propertyName) && this.control.touched) {
                    return ValidationService.getValidatorErrorMessage(propertyName, error[propertyName]);
                }
            }
        }
        return null;
    }
}