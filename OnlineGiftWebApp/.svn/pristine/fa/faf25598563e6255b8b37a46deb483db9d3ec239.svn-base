import { Headers, RequestOptions } from '@angular/http';
import { CurrUser } from "./shared/models/curruser.model";
import { Role } from "./shared/models/role.enum";

export class AppConfig {

    public getAuthHeader() {
        let currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.token) {
            let header = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: header });
        }
        else {
            return null;
        }
    }

    public getToken(){
        let currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.token) {
            return currentUser.token;
        }
        else {
            return "";
        }
    }

    public getCurrentUserId() {
        let currentUser = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUser && currentUser.id) {
            return currentUser.id;
        }
        else {
            return null;
        }
    }

    public getCurrentUser(): CurrUser {
        let currentUserObj = JSON.parse(String(localStorage.getItem('currentUser')));
        if (currentUserObj) {
            var currUser = new CurrUser();

            currUser.email = currentUserObj.email;
            currUser.fullName = currentUserObj.fullName;
            currUser.role = Role[Role[currentUserObj.roleId]];
            currUser.username = currentUserObj.username;
            currUser.id = currentUserObj.id;

            return currUser;
        }
        else {
            return null;
        }
    }

    public setCurrentUser(model: any) {
        localStorage.setItem('currentUser', JSON.stringify(model));
    }

    public removeCurrentUser() {
        localStorage.removeItem('currentUser');
    }
};
