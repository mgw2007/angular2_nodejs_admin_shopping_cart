import {Component, OnInit, ViewChild} from '@angular/core';
import {LocalBootstrapService} from "../local-bootstrap.service";
import {ModalDirective} from "ngx-bootstrap";
import {ConfirmModal} from "./confirm-modal.interface";

@Component({
    selector: 'app-confirm-modal',
    templateUrl: './confirm-modal.component.html',
    styles: []
})
export class ConfirmModalComponent implements OnInit {
    @ViewChild('staticModal')
    staticModal: ModalDirective;
    confirmMessage: string;
    item: ConfirmModal;

    constructor(private localBootstrapService: LocalBootstrapService) {
    }

    ngOnInit() {
        this.localBootstrapService.getConfirmModalObservable().subscribe(item => this.show(item));
    }

    show(item) {
        this.item = item;
        this.confirmMessage = item.message;
        this.staticModal.show();
    }

    onConfirm() {
        this.item.success();
        this.staticModal.hide();
    }

    onHidden() {
        this.confirmMessage = '';
        this.item = null;
    }

}
