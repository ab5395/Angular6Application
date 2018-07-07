import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../../shared/api.url';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../shared/models/api.response';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) { }

  doLogin(model: any) {
    return this.http.post<ApiResponse>(AccountManagementApi.login, model);
  }

  doLogout() {
    return this.http.get<ApiResponse>(AccountManagementApi.logout);
  }

  checkAlreadyLoggedIn() {
    return this.http.get<ApiResponse>(AccountManagementApi.checkAlreadyLoggedIn);
  }
}
