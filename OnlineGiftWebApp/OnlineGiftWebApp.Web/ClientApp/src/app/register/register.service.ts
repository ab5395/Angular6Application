import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../shared/api.url';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../shared/models/api.response';

@Injectable()
export class RegisterService {

  constructor(public http: HttpClient) { }

  doRegister(model: any) {
    debugger;
    return this.http.post<ApiResponse>(AccountManagementApi.register, model);
  }

  //doLogout() {
  //  return this.http.get<ApiRes>(AccountManagementApi.logout);
  //}
}
