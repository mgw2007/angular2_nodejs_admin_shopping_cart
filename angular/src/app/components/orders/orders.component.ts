import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {LocalApiService} from "../../services/local-api.service";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
import {AuthService} from "../../services/auth.service";
import * as FileSaver from 'file-saver';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styles: []
})
export class OrdersComponent implements OnInit {
    orders = [];

    constructor(private pageTitle: Title,
                private localApi: LocalApiService,
                private localBootstrap: LocalBootstrapService,
                private auth: AuthService) {
    }

    ngOnInit() {
        this.pageTitle.setTitle('Orders');
        this.getAllOrders();
    }

    getAllOrders() {
        this.localApi.getAllOrders().subscribe(res => this.orders = res);
    }

    downloadPdf(id) {
        this.localBootstrap.showLoader();
        this.localApi.getOrderInvoicePdf(id).subscribe(res => {

            let blob = new Blob([res], {type: 'application/pdf'});
            let fs = FileSaver.saveAs(blob, "invoice_"+id+".pdf");
            fs.onwriteend = () => this.localBootstrap.hideLoader();
        })
    }
}
