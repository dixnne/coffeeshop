import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { CoffeeshopAPIService } from '../../../shared/coffeeshop-api.service';

@Component({
  selector: 'app-suppliers',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './suppliers.component.html',
  styleUrl: './suppliers.component.css'
})
export class SuppliersComponent {
  suppliers?: any;

  constructor(private coffeeshopAPI: CoffeeshopAPIService) {
    this.getSuppliers();
  }

  getSuppliers() {
    this.coffeeshopAPI.getSuppliers().subscribe((res: any) => {
      this.suppliers = res;
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
        this.coffeeshopAPI.deleteSupplier(id).subscribe((res: any) => {
          console.log(res);
          if (res.error) {
            Swal.fire({
              title: "Error!",
              text: res.error,
              icon: "error"
            });
          } else {
            this.getSuppliers();
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
