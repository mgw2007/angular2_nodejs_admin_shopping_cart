import {Component, OnInit} from '@angular/core';
import {LocalBootstrapService} from "../local-bootstrap.service";

declare var $: any;

@Component({
    selector: 'app-block-page-loader',
    templateUrl: './block-page-loader.component.html',
    styles: []
})
export class BlockPageLoaderComponent implements OnInit {
    showLoader: boolean;

    constructor(private localBootstrap: LocalBootstrapService) {
    }

    ngOnInit() {
        this.showLoader = false;
        this.localBootstrap.getPageLoaderObservable().subscribe(show => this.showLoader = show);
    }

}
