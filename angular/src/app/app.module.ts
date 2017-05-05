import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; //Template Driven Forms
import {ReactiveFormsModule} from '@angular/forms'; //Model Driven Forms
import {HttpModule} from '@angular/http';
import {PrettyJsonModule} from "angular2-prettyjson";
import {FlashMessagesModule} from "angular2-flash-messages";
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductsComponent} from './components/products/products.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LocalApiService} from "./services/local-api.service";
import {AddProductComponent} from './components/add-product/add-product.component';
import {LocalHelperService} from "./services/local-helper.service";
import {AppRouteModule} from "./app.routes";
import { TestAppComponent } from './components/test-app/test-app.component';
import {TestAppService} from "./components/test-app/test-app.service";
import {ModalModule} from "ngx-bootstrap";
import { ConfirmModalComponent } from './components/bootstrap/confirm-modal/confirm-modal.component';
import {LocalBootstrapService} from "./components/bootstrap/local-bootstrap.service";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProductsComponent,
        DashboardComponent,
        AddProductComponent,
        TestAppComponent,
        ConfirmModalComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        PrettyJsonModule,
        AppRouteModule,
        FlashMessagesModule,
        ModalModule.forRoot()
    ],
    providers: [LocalApiService, LocalHelperService, TestAppService, LocalBootstrapService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
