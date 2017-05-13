import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styles: []
})
export class NavbarComponent implements OnInit {
    @ViewChild('adminsAdd') adminsAdd: ElementRef;
    @ViewChild('adminsList') adminsList: ElementRef;
    @ViewChild('productsList') productsList: ElementRef;
    @ViewChild('productsAdd') productsAdd: ElementRef;
    constructor(private router: Router, public auth: AuthService) {
    }

    ngOnInit() {
        // console.log(this.router.url);

    }

}
