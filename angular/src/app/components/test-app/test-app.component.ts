import {Component, OnInit, Input} from '@angular/core';
import {TestAppService} from "./test-app.service";


@Component({
    selector: 'app-test-app',
    templateUrl: './test-app.component.html',
    styles: []
})
export class TestAppComponent implements OnInit {
    master: string = 'Master';

    data: String;
    cb: () => void;

    constructor(private _testAppSerivce: TestAppService) {

    }

    ngOnInit() {
        this.data = 'XXXXXXXXX';
        // this._testAppSerivce.itemsObs.subscribe(item => this.show(item));
        this._testAppSerivce.itemsObs.subscribe(item => this.show(item));
    }

    show(d) {
        this.data = d.v;
        this.cb = d.cb;
    }

    test() {
        this.cb();
    }
}
