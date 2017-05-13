import {Component, OnInit} from '@angular/core';
import {LocalApiService} from "../../services/local-api.service";
import {Title} from "@angular/platform-browser";
import {AuthService} from "../../services/auth.service";

@Component({
    selector: 'app-admins',
    templateUrl: './admins.component.html',
    styles: []
})
export class AdminsComponent implements OnInit {
    admins = [];

    constructor(private title: Title,
                private localApi: LocalApiService,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.title.setTitle('Admins');
        this.localApi.getAllAdmins().subscribe(res => this.admins = res.admins);
    }

}
