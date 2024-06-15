import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CoffeeshopAPIService } from '../../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsadmin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productsadmin.component.html',
  styleUrl: './productsadmin.component.css'
})
export class ProductsadminComponent {
  products?: any;

  constructor(private coffeeshopAPI: CoffeeshopAPIService) {
    this.getProducts();
  }

  getProducts() {
    this.coffeeshopAPI.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }

  deleteRow(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.coffeeshopAPI.deleteProduct(id).subscribe((res: any) => {
          console.log(res);
          if (res.error) {
            Swal.fire({
              title: "Error!",
              text: res.error,
              icon: "error"
            });
          } else {
            this.getProducts();
            Swal.fire({
              title: "Deleted!",
              text: res.message,
              icon: "success"
            });
          }
        });
      }
    });
  }
}
