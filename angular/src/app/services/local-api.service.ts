import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {tokenNotExpired} from "angular2-jwt";

import  'rxjs/add/operator/map';
import {environment} from "../../environments/environment";
import {AuthService} from "./auth.service";

@Injectable()
export class LocalApiService {

    constructor(private http: Http, private authService: AuthService) {
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
        return this.http.post(environment.localApiUrl + '/products', product,  this.getAuthHeader());
    }

    updateProduct(id, product) {
        return this.http.put(environment.localApiUrl + '/products/' + id, product,  this.getAuthHeader());
    }

    deleteProduct(id) {
        return this.http.delete(environment.localApiUrl + '/products/' + id, this.getAuthHeader());
    }

    getProduct(id) {
        return this.http.get(environment.localApiUrl + '/products/' + id,  this.getAuthHeader()).map(res => res.json());
    }

    getAllProducts() {
        return this.http.get(environment.localApiUrl + '/products/', this.getAuthHeader()).map(res => res.json());
    }

    getDashboardData() {
        return this.http.get(environment.localApiUrl + '/dashboard',  this.getAuthHeader());
    }
    getUserData()
    {
        return this.http.get(environment.localApiUrl + '/adminData', this.getAuthHeader()).map(res => res.json());
    }
    loginUser(data) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(environment.localApiUrl + '_login', data, {headers: headers})
            .map(res => res.json());
    }


}
