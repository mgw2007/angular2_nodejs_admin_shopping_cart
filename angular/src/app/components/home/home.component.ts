import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
import {LocalApiService} from "../../services/local-api.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: []
})
export class HomeComponent implements OnInit {

    constructor(private title1: Title,
                private localApi: LocalApiService,
                private bootstrapService: LocalBootstrapService) {

    }


    ngOnInit() {
        this.title1.setTitle('Dashboard');
        this.localApi.getDashboardData().subscribe(data => console.log(data));
    }

}
