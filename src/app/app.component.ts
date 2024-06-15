import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OrderComponent } from './components/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MenuComponent, NavbarComponent, OrderComponent, AdminComponent, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'coffeeshop';
}
