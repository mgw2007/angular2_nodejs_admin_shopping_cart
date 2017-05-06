import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";
import {AddProductComponent} from "./components/add-product/add-product.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '', component: DashboardComponent, canActivate: [AuthGuard], children: [
        {path: 'dashboard', component: HomeComponent},
        {
            path: 'products', children: [
            {path: '', component: ProductsComponent},
            {path: 'add', component: AddProductComponent},
            {path: 'edit/:id', component: AddProductComponent},
        ]
        },
        {path: '**', redirectTo: 'dashboard'}
    ]
    }
];
const AppRouteModule = RouterModule.forRoot(appRoutes);

export {AppRouteModule};