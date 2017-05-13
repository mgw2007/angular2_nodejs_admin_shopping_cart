import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {tokenNotExpired} from "angular2-jwt";

import  'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";

@Injectable()
export class LocalApiService {

    constructor(private http: Http, private authService: AuthService, private router: Router) {
    }

    getProductImageUrl() {
        return environment.localSiteUrl + 'images/showProduct?i='
    }

    getAuthHeader() {
        let headers = new Headers();
        headers.append('Authorization', this.authService.getToken());
        return {headers: headers};
    }

    addProduct(product) {
        return this.http.post(environment.localApiUrl + '/products', product, this.getAuthHeader()).catch(error => this.handleError(error));
    }

    updateProduct(id, product) {
        return this.http.put(environment.localApiUrl + '/products/' + id, product, this.getAuthHeader()).catch(error => this.handleError(error));
    }

    deleteProduct(id) {
        return this.http.delete(environment.localApiUrl + '/products/' + id, this.getAuthHeader()).catch(error => this.handleError(error));
    }

    getProduct(id) {
        return this.http.get(environment.localApiUrl + '/products/' + id, this.getAuthHeader()).map(res => res.json()).catch(error => this.handleError(error));
    }

    getAllProducts() {
        return this.http.get(environment.localApiUrl + '/products/', this.getAuthHeader()).map(res => res.json()).catch(error => this.handleError(error));
    }

    getDashboardData() {
        return this.http.get(environment.localApiUrl + '/dashboard', this.getAuthHeader()).catch(error => this.handleError(error));
    }

    getProfileData() {
        return this.http.get(environment.localApiUrl + '/adminProfile', this.getAuthHeader()).map(res => res.json()).catch(error => this.handleError(error));
    }

    getAdminData(id) {
        return this.http.get(environment.localApiUrl + '/admins/' + id, this.getAuthHeader()).map(res => res.json()).catch(error => this.handleError(error));
    }

    getAllAdmins() {
        return this.http.get(environment.localApiUrl + '/admins', this.getAuthHeader()).map(res => res.json()).catch(error => this.handleError(error));
    }

    addAdmin(admin) {
        return this.http.post(environment.localApiUrl + '/admins', admin, this.getAuthHeader()).catch(error => this.handleError(error));
    }

    updateAdmin(id, admin) {
        return this.http.put(environment.localApiUrl + '/admins/' + id, admin, this.getAuthHeader()).catch(error => this.handleError(error));
    }

    handleError(error: any) {
        this.router.navigate(['/login']);
        return Observable.throw(error);
    }

    deleteAdmin(id) {
        return this.http.delete(environment.localApiUrl + '/admins/' + id, this.getAuthHeader());
    }

    checkAdminEmailExist(email, id) {
        return this.http.post(environment.localApiUrl + '/checkEmailExist', {
            email: email,
            id: id
        }, this.getAuthHeader()).map(res => res.json());
    }

    loginUser(data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.localApiUrl + '_login', data, {headers: headers})
            .map(res => res.json());
    }


}
