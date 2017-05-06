import {Component, OnInit} from '@angular/core';
import {LocalBootstrapService} from "../local-bootstrap.service";
import {NotifyBootstrap} from "./notify-bootstrap.interface";
declare var $: any;
@Component({
    selector: 'app-notify',
    templateUrl: './notify.component.html',
    styles: []
})
export class NotifyComponent implements OnInit {

    constructor(private localBootstrap: LocalBootstrapService) {
    }

    ngOnInit() {
        this.localBootstrap.getNotifyObservable().subscribe(item => this.show(item));
    }

    show(item: NotifyBootstrap) {
        $.notify({
            message: item.message
        }, {
            type: item.type,
            placement: {
                from: "top",
                align: "center"
            },

        });
    }
}
