import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../shared/api.url';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../shared/models/api.response';

@Injectable()
export class LoginService {

  constructor(public http: HttpClient) { }

  doLogin(model: any) {
    debugger;
    return this.http.post<ApiResponse>(AccountManagementApi.login, model);
  }
}
