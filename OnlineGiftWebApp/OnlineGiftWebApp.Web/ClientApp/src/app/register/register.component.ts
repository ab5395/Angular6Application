import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from "../shared/services/validation.service"
import { ResgiterModel } from "./register.model";
import { RegisterService } from "./register.service";
//import { AppConfig } from "../app.config";
import { Router } from "@angular/router";
//import { NotificationService } from '../shared/services/notification.service';
import { Role } from '../shared/models/role.enum';
//import { ErrorData } from '../error/error.data';
import { AppRoute } from '../shared/AppRoute';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  frmRegister: any;
  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private _router: Router
  ) {
    this.frmRegister = this.formBuilder.group({
      'username': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required,ValidationService.passwordMatchValidator('password','confirmPassword')]],
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'location': ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }


  register() {
    let model: ResgiterModel = new ResgiterModel();
    model.username = this.frmRegister.value.username;
    model.password = this.frmRegister.value.password;
    model.confirmPassword = this.frmRegister.value.confirmPassword;
    model.firstName = this.frmRegister.value.firstName;
    model.lastName = this.frmRegister.value.lastName;
    model.role = "User";
    model.location = this.frmRegister.value.location;
    debugger;
    if (this.frmRegister.dirty && this.frmRegister.valid) {

      this.registerService.doRegister(model).subscribe(result => {
        debugger;
        if (result.status === true) {
          alert("Regiter Successfully");
        }
        else if (result.status === false) {
          // this.notificationService.showNotification("Invalid username or password!! Please try again");
          alert("Some error occured while processing your request!! Please try again");
        }
        else {
          //this.notificationService.showNotification("Some error occured while processing your request!! Please try again");
          alert("Some error occured while processing your request!! Please try again");
        }
      });
    };
  }

}
