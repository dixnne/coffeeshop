import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoffeeshopAPIService } from '../../shared/coffeeshop-api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = "";
  email: string = "";
  password: string = "";
  phone: string = "";

  constructor(private coffeeshopAPI: CoffeeshopAPIService, private router: Router) {}

  signup(){
    this.coffeeshopAPI.postClient(this.name, this.email, this.phone, this.password).subscribe(res => {
      if (res.error) {
        Swal.fire({
          title: "Something went wrong",
          text: "Couldn't register you as client, try again later",
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Welcome to the family!",
          text: "Your account has been successfully added!",
          icon: "success"
        }).then(() => {
          this.router.navigate(['/menu']);
        })
      }
    })
  }
}
