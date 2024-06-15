import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  name: string = "";
  description: string = "";
  price: number = 0;

  constructor(private coffeeshopAPI: CoffeeshopAPIService, private router: Router) {}

  add(): void {
    this.coffeeshopAPI.postProduct(this.name, this.description, this.price).subscribe((res: any) => {
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
          text: "Product successfully added.",
          icon: "success"
        }).then(() => {
          this.router.navigate(['/admin']);
        });
      }
    });
  }
}
