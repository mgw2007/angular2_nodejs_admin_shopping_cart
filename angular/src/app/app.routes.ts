import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";
import {ProductFormComponent} from "./components/product-form/product-form.component";
import {AuthGuard} from "./guards/auth.guard";
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminsComponent} from "./components/admins/admins.component";
import {AdminFormComponent} from "./components/admin-form/admin-form.component";

const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '', component: DashboardComponent, canActivate: [AuthGuard],data:{'admins':'roless'}, children: [
        {path: 'dashboard', component: HomeComponent},
        {
            path: 'products', children: [
            {path: '', component: ProductsComponent},
            {path: 'add', component: ProductFormComponent},
            {path: 'edit/:id', component: ProductFormComponent},
        ]
        },
        {
            path: 'admins', children: [
            {path: '', component: AdminsComponent,data:{'admins':'rox'},canActivateChild:[AuthGuard]},
            {path: 'add', component: AdminFormComponent,data:{'admins':'add'},canActivateChild:[AuthGuard]},
            {path: 'edit/:id', component: AdminFormComponent},
        ]
        },
        {path: '**', redirectTo: 'dashboard'}
    ]
    }
];
const AppRouteModule = RouterModule.forRoot(appRoutes);

export {AppRouteModule};