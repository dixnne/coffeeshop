import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-supplier.component.html',
  styleUrl: './add-supplier.component.css'
})
export class AddSupplierComponent {
  name: string = "";
  supply_id: number = 0;
  price: number = 0;
  supplies?: any;

  constructor(private coffeeshopAPI: CoffeeshopAPIService, private router: Router) {
    this.coffeeshopAPI.getSupplies().subscribe(res => {
      this.supplies = res;
    });
  }

  add(): void {
    this.coffeeshopAPI.postSupplier(this.name, this.supply_id, this.price).subscribe(res => {
      console.log(res);
      if (res.error) {
        Swal.fire({
          title: "Error!",
          text: res.error,
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Added!",
          text: "Supplier successfully added.",
          icon: "success"
        }).then(() => {
          this.router.navigate(['/admin']);
        });
      }
    })
  }
}
