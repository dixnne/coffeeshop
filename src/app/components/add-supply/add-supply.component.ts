import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supply',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './add-supply.component.html',
  styleUrl: './add-supply.component.css'
})
export class AddSupplyComponent {
  name: string = "";
  quantity: number = 0;

  constructor(private coffeeshopAPI: CoffeeshopAPIService, private router: Router) {}

  add(): void {
    this.coffeeshopAPI.postSupply(this.name, this.quantity).subscribe(res => {
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
          text: "Supply successfully added.",
          icon: "success"
        }).then(() => {
          this.router.navigate(['/admin']);
        });
      }
    })
  }
}
