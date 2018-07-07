import { Injectable } from '@angular/core';
import { AccountManagementApi } from '../../shared/api.url';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ApiResponse } from '../../shared/models/api.response';

@Injectable()
export class ComfirmAccountService {

    resetCode: string;
    email: string;

    constructor(public http: HttpClient) { }

    confirmEmail(email: string, code: string) {
        let params=new HttpParams()
        .set('email',email)
        .set('code',code);
        var apiurl= this.http.get<ApiResponse>(AccountManagementApi.confirmEmail, { params: params });
        return apiurl;
    }
}
