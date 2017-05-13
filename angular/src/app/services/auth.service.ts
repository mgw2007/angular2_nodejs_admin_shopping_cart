import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import  'rxjs/add/operator/map';
import {tokenNotExpired} from "angular2-jwt";

@Injectable()
export class AuthService {
    static TokenName = 'id_token';
    authToken: any;
    user: any;

    constructor(private http: Http) {

    }

    can(action) {
        let user  = JSON.parse(localStorage.getItem('user'));
        if (user.isSuperAdmin) {
            return true;
        }
        else {
            let actionDetails = action.split('.');
            if (user.roles[actionDetails[0]]) {
                if (user.roles[actionDetails[0]] == 'manage') {
                    return true;
                }
                else {
                    if (user.roles[actionDetails[0]] == actionDetails[1]) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    storeUserData(token, user) {
        localStorage.setItem(AuthService.TokenName, token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    getToken() {
        return localStorage.getItem(AuthService.TokenName);
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    loggedIn() {
        return tokenNotExpired(AuthService.TokenName);
    }
}
