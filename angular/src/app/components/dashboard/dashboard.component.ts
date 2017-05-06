import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LocalApiService} from "../../services/local-api.service";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    loginUser = {
        name: '',
        email: ''
    };
    title = '';

    constructor(private title1: Title,
                private localApi: LocalApiService,
                private router: Router,
                private bootstrap: LocalBootstrapService,
                private authService: AuthService) {

    }

    ngOnInit() {
        this.title = this.title1.getTitle();
        this.router.events.subscribe((val) => {
            this.title = this.title1.getTitle();
        })
        this.localApi.getUserData().subscribe(res => this.loginUser = res.admin);
    }

    onLogoutClick() {
        this.authService.logout();
        this.bootstrap.notifySuccess('You are logout');
        this.router.navigate(['login']);
    }
}
