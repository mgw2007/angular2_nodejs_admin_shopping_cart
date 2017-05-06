import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ConfirmModal} from "./confirm-modal/confirm-modal.interface";
import {Subject} from "rxjs/Subject";
import {NotifyBootstrap} from "./notify/notify-bootstrap.interface";

@Injectable()
export class LocalBootstrapService {

    constructor() {
    }

    private confirmModalSubject = new Subject<ConfirmModal>();
    private confirmModalObservable = this.confirmModalSubject.asObservable();

    private notifySubject = new Subject<NotifyBootstrap>();
    private notifyObservable = this.notifySubject.asObservable();

    confrimModal(item: ConfirmModal) {
        this.confirmModalSubject.next(item);
    }

    notify(item: NotifyBootstrap) {
        this.notifySubject.next(item);
    }

    notifySuccess(message) {
        this.notify({
            message: message,
            type: 'success'
        })
    }

    getNotifyObservable() {
        return this.notifyObservable;
    }

    getConfirmModalObservable() {
        return this.confirmModalObservable;
    }
}
