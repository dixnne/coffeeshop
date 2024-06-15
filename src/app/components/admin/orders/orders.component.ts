import { Component } from '@angular/core';
import { CoffeeshopAPIService } from '../../../shared/coffeeshop-api.service';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders?: any;

  constructor(private coffeeshopAPI: CoffeeshopAPIService) {
    this.coffeeshopAPI.getOrders().subscribe(res => {
      this.orders = res;
    });
  }
}
