import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { ProductsadminComponent } from './productsadmin/productsadmin.component';
import { SuppliesComponent } from './supplies/supplies.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { OrdersComponent } from './orders/orders.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, ProductsadminComponent, SuppliesComponent, SuppliersComponent, OrdersComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  currentPage: string = "Products";

  changePage(page: string): void {
    switch (page) {
      case 'products':
        this.currentPage = "Products";
        break;
      case 'suppliers':
        this.currentPage = "Suppliers";
        break;
      case 'supplies':
        this.currentPage = "Supplies";
        break;
      case 'orders':
        this.currentPage = "Orders";
        break;
      default:
        break;
    }
  }
}
