import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalApiService} from "../../services/local-api.service";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    formSubmitted: boolean;
    validData: boolean;

    constructor(private title1: Title,
                private pageTitle: Title,
                private formBuilder: FormBuilder,
                private localApi: LocalApiService,
                private authService: AuthService,
                private localBootstrap: LocalBootstrapService,
                private activeRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.title1.setTitle('Dashboard Login');
        this.formSubmitted = false;
        this.validData = true;

        this.loginForm = this.formBuilder.group({
            email: ['admin@mina.com', [Validators.required]],
            password: ['123123', [Validators.required]],
        })
    }

    onLoginSubmit() {
        this.formSubmitted = true;
        if (this.loginForm.valid) {
            const user = {
                email: this.loginForm.value.email,
                password: this.loginForm.value.password,
            }
            this.localApi.loginUser(user).subscribe(data => {
                if (data.success) {
                    this.localBootstrap.notifySuccess('Welcome to dashboard');
                    this.authService.storeUserData(data.token, data.user);
                    this.router.navigate(['dashboard']);
                } else {
                    this.validData = false;
                }
            })
        }
    }
}
