import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; //Template Driven Forms
import {ReactiveFormsModule} from '@angular/forms'; //Model Driven Forms
import {HttpModule} from '@angular/http';
import {PrettyJsonModule} from "angular2-prettyjson";
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ProductsComponent} from './components/products/products.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LocalApiService} from "./services/local-api.service";
import {AddProductComponent} from './components/add-product/add-product.component';
import {LocalHelperService} from "./services/local-helper.service";
import {AppRouteModule} from "./app.routes";
import {TestAppComponent} from './components/test-app/test-app.component';
import {TestAppService} from "./components/test-app/test-app.service";
import {ModalModule} from "ngx-bootstrap";
import {ConfirmModalComponent} from './components/bootstrap/confirm-modal/confirm-modal.component';
import {LocalBootstrapService} from "./components/bootstrap/local-bootstrap.service";
import {NotifyComponent} from './components/bootstrap/notify/notify.component';
import {AuthGuard} from "./guards/auth.guard";
import {AuthService} from "./services/auth.service";
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import {APP_BASE_HREF} from "@angular/common";
import { BlockPageLoaderComponent } from './components/bootstrap/block-page-loader/block-page-loader.component';
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        ProductsComponent,
        DashboardComponent,
        AddProductComponent,
        TestAppComponent,
        ConfirmModalComponent,
        NotifyComponent,
        HomeComponent,
        LoginComponent,
        BlockPageLoaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        PrettyJsonModule,
        AppRouteModule,
        ModalModule.forRoot()
    ],
    providers: [LocalApiService, LocalHelperService, TestAppService, LocalBootstrapService, AuthService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {
}
