import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ConfirmModal} from "./confirm-modal.interface";
import {Subject} from "rxjs/Subject";

@Injectable()
export class LocalBootstrapService {

    constructor() {
    }

    private behaviorSubject = new Subject<ConfirmModal>();
    observable = this.behaviorSubject.asObservable();

    confrimModal(item: ConfirmModal) {
        console.log('zzzzzzzz')
        this.behaviorSubject.next(item);
    }

    // getObservable() {
    //     return this.observable;
    // }
}
