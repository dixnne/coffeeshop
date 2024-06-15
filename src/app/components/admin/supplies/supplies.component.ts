import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-supplies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './supplies.component.html',
  styleUrl: './supplies.component.css'
})
export class SuppliesComponent {
  supplies?: any;

  constructor(private coffeeshopAPI: CoffeeshopAPIService) {
    this.getSupplies();
  }

  getSupplies() {
    this.coffeeshopAPI.getSupplies().subscribe((res: any) => {
      this.supplies = res;
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
        this.coffeeshopAPI.deleteSupply(id).subscribe((res: any) => {
          console.log(res);
          if (res.error) {
            Swal.fire({
              title: "Error!",
              text: res.error,
              icon: "error"
            });
          } else {
            this.getSupplies();
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
