import { Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddSupplierComponent } from './components/add-supplier/add-supplier.component';
import { AddSupplyComponent } from './components/add-supply/add-supply.component';

export const routes: Routes = [
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'order', component: OrderComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'addproduct', component: AddProductComponent },
    { path: 'addsupplier', component: AddSupplierComponent },
    { path: 'addsupply', component: AddSupplyComponent },
];
