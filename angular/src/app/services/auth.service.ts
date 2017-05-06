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
