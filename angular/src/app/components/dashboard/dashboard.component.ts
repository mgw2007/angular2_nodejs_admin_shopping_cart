import {Component, OnInit, ViewChild} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TestAppService} from "../test-app/test-app.service";
import {ModalDirective} from 'ngx-bootstrap/modal';
import {ConfirmModal} from "../bootstrap/confirm-modal.interface";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: []
})
export class DashboardComponent implements OnInit {
    sdata: string;

    constructor(private title1: Title, private _bootstrapService: LocalBootstrapService) {

    }

    ngOnInit() {
        this.title1.setTitle('Dashboard');

    }

    tryDelete(id) {
        console.log(id)
    }

    updateData(value) {
        // this._testAppService.showItem(value);
        console.log('xxxxxxxxxxxxxxxxx')
        this._bootstrapService.confrimModal({
            'message': 'Are you sure from delete product ?',
            'success': () => {
                this.tryDelete(value);
            }
        });
    }

}
