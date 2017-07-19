import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LocalApiService} from "../../services/local-api.service";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
import {AuthService} from "../../services/auth.service";
declare var $: any;


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit,AfterViewInit {
    loginUser = {
        name: '',
        email: ''
    };
    pageTitle = '';

    ngAfterViewInit(): void {
        $(window).resize()
    }
    constructor(private title: Title,
                private localApi: LocalApiService,
                private router: Router,
                private bootstrap: LocalBootstrapService,
                private authService: AuthService) {

    }

    ngOnInit() {
        this.pageTitle = this.title.getTitle();
        this.router.events.subscribe((val) => {
            this.pageTitle = this.title.getTitle();
        })
        this.localApi.getProfileData().subscribe(res => this.loginUser = res.admin);
    }

    onLogoutClick() {
        this.authService.logout();
        this.bootstrap.notifySuccess('You are logout');
        this.router.navigate(['login']);
    }

}
