import {Injectable} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {tokenNotExpired} from "angular2-jwt";

import  'rxjs/add/operator/map';
import {environment} from "../../environments/environment";

@Injectable()
export class LocalApiService {

    constructor(private http: Http) {
    }

    getProductImageUrl() {
        return environment.localSiteUrl + 'images/showProduct?i='
    }

    addProduct(product) {
        let headers = new Headers();
        return this.http.post(environment.localApiUrl + '/products', product, {headers: headers});
    }

    updateProduct(id, product) {
        let headers = new Headers();
        return this.http.put(environment.localApiUrl + '/products/' + id, product, {headers: headers});
    }

    deleteProduct(id) {
        let headers = new Headers();
        return this.http.delete(environment.localApiUrl + '/products/' + id, {headers: headers});
    }

    getProduct(id) {
        let headers = new Headers();
        return this.http.get(environment.localApiUrl + '/products/' + id, {headers: headers}).map(res => res.json());
    }

    getAllProducts() {
        let headers = new Headers();
        return this.http.get(environment.localApiUrl + '/products/', {headers: headers}).map(res => res.json());
    }

    loggedIn() {
        return tokenNotExpired('id_token');
    }

}
