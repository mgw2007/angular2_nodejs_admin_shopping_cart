import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {ProductsComponent} from "./components/products/products.component";
import {AddProductComponent} from "./components/add-product/add-product.component";

const appRoutes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/add', component: AddProductComponent},
    {path: 'products/edit/:id', component: AddProductComponent},
    {path: '**', redirectTo: 'dashboard'}
];
const AppRouteModule = RouterModule.forRoot(appRoutes);

export {AppRouteModule};