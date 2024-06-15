import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  products?: any;
  order: number[] = [];
  orderItems: string[] = [];
  prices: number[] = [];
  total: number = 0;

  constructor(private coffeeshopAPI: CoffeeshopAPIService, private router: Router) {
    this.coffeeshopAPI.getProducts().subscribe((res: any) => {
      this.products = res;
    })
  }

  addToOrder(id: number) {
    this.order.push(id);
    this.coffeeshopAPI.getProduct(id).subscribe((res: any) => {
      this.orderItems.push("$" + res[0].price + " - " + res[0].name);
      this.prices.push(parseFloat(res[0].price));
      this.total = 0;
      this.prices.forEach((price) => this.total += price);
    });
  }

  eliminateItem(id: number) {
    const idx = this.order.findIndex(product => product === id);
    this.order.splice(idx, 1);
    this.orderItems.splice(idx,1);
    this.prices.splice(idx,1);

    this.total = 0;
    this.prices.forEach((price) => this.total += price);
  }

  async makeOrder() {
    const { value: email } = await Swal.fire({
      title: "Insert your email from client account",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      this.coffeeshopAPI.getClientByEmail(email).subscribe((res: any) => {
        if (!res.error && res[0]) {
          const date = new Date();
          const formattedDate = date.toISOString().split('T')[0].replace(/-/g, ' ');
          this.coffeeshopAPI.postOrder(res[0].client_id, formattedDate, this.total).subscribe((r: any) => {
            console.log(r);
            if (r.error) {
              Swal.fire({
                title: "Error!",
                text: "Something went wrong",
                icon: "error"
              });
            } else {
              Swal.fire({
                title: "Thank you!",
                text: "You won't regret it!",
                icon: "success"
              }).then(() => {
                this.router.navigate(['/order'])
              })
            }
          });
        } else {
          
        }
      })
    }
  }

  
}
