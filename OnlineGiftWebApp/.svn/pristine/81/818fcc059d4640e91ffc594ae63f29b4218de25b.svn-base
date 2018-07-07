import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../../shared/api.url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../shared/models/api.response';

@Injectable()
export class ResetPasswordService {

    email: string;
    code: string;

    constructor(public http: HttpClient) { }

    doResetPassword(email: string, code: string) {
        let params = new HttpParams()
            .set('email', email)
            .set('code', code);
        var apiurl = this.http.get<ApiResponse>(AccountManagementApi.resetPassword, { params: params });
        return apiurl;
    }

    doSetPassword(model: any) {
        return this.http.post<ApiResponse>(AccountManagementApi.setPassword, model);
      }
}
