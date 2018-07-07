import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../../shared/api.url';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../../shared/models/api.response';

@Injectable()
export class ForgetPasswordService {

  constructor(public http: HttpClient) { }

  doForgetPassword(model: any) {
    return this.http.post<ApiResponse>(AccountManagementApi.forgetPassword, model);
  }
}
