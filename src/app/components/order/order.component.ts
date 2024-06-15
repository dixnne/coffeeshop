import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  orders?: any;
  id: number = 0;

  constructor(private coffeeshopAPI: CoffeeshopAPIService) {
    this.coffeeshopAPI.getOrders().subscribe((res: any) => {
      console.log(res);
      
      this.orders = res;
    })
    this.getClient();
  }

  async getClient() {
    const { value: email } = await Swal.fire({
      title: "Insert your email from client account",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      this.coffeeshopAPI.getClientByEmail(email).subscribe((res: any) => {
        console.log(res);
        if (res[0]) {
          this.id = res[0].client_id;
        }
      });
    }
  }
}
