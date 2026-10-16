// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-customer-add',
//   styleUrl: './customer-add.css',
//   templateUrl: './customer-add.html',
// })
// export class CustomerAdd {}


import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-add.html'
})
export class CustomerAddComponent {

  customerService = inject(CustomerService);

  router = inject(Router);

  customer = {
    id: "0",
    name: '',
    email: '',
    phone: ''
  };

  save() {

    this.customerService
      .addCustomer(this.customer)
      .subscribe(() => {

        this.router.navigate(['/customers']);

      });
  }
}