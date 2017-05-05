import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class TestAppService {
    private itemSubject = new BehaviorSubject({});
    public itemsObs = this.itemSubject.asObservable();

    showItem(number) {
        this.itemSubject.next(number);
    }
}

/*
// Observer Way
 export class TestAppService {
 private _observe: Observer<any>;
 itemsObs = new Observable(observer => this._observe = observer);
 // public itemsObs = this.itemSubject.asObservable();

 showItem(number) {
 this._observe.next(number);
 }
 }
 */