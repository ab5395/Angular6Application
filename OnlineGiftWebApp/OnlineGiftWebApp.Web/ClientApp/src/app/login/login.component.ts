import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { ValidationService } from "../shared/services/validation.service"
import { LoginModel } from "./login.model";
import { LoginService } from "./login.service";
//import { AppConfig } from "../app.config";
import { Router } from "@angular/router";
//import { NotificationService } from '../shared/services/notification.service';
import { Role } from '../shared/models/role.enum';
//import { ErrorData } from '../error/error.data';
import { AppRoute } from '../shared/AppRoute';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  frmLogin: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private _router: Router
    //private errorData: ErrorData
  ) {
    this.frmLogin = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    //document.documentElement.setAttribute('data-agent', navigator.userAgent);
  }

  login() {
    let model: LoginModel = new LoginModel();
    model.email = this.frmLogin.value.email;
    model.password = this.frmLogin.value.password;
    debugger;
    if (this.frmLogin.dirty && this.frmLogin.valid) {

      this.loginService.doLogin(model).subscribe(result => {
        debugger;
        if (result.status === true) {
          alert("Login Successfully");
        }
        else if (result.status === false) {
          // this.notificationService.showNotification("Invalid username or password!! Please try again");
          alert("Invalid username or password!! Please try again");
        }
        else {
          //this.notificationService.showNotification("Some error occured while processing your request!! Please try again");
          alert("Some error occured while processing your request!! Please try again");
        }
      });
    };
  }

}
