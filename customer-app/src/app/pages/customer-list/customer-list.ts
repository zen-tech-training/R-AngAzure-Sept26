// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-customer-list',
//   styleUrl: './customer-list.css',
//   templateUrl: './customer-list.html',
// })
// export class CustomerList {}


import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './customer-list.html'
})
export class CustomerListComponent {

  customerService = inject(CustomerService);

  constructor() {
    this.customerService.loadCustomers();
  }

  deleteCustomer(id: number) {

    if (confirm('Delete customer?')) {

      this.customerService
        .deleteCustomer(id)
        .subscribe(() => {

          this.customerService.loadCustomers();

        });
    }
  }
}