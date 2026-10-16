// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-customer-edit',
//   styleUrl: './customer-edit.css',
//   templateUrl: './customer-edit.html',
// })
// export class CustomerEdit {}


import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../../services/customer';

@Component({
  selector: 'app-customer-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './customer-edit.html'
})
export class CustomerEditComponent {

  customerService = inject(CustomerService);

  route = inject(ActivatedRoute);

  router = inject(Router);

  // customer: any = {};
  customer = signal({
  id: '',
  name: '',
  email: '',
  phone: ''
});

  ngOnInit() {

    console.log("Recieved parameter: ", this.route.snapshot.paramMap.get('id'))
    const id = this.route.snapshot.paramMap.get('id')
    
    console.log(id);

    if (!id) return;

    this.customerService
      .getCustomerById(id)
      .subscribe(res => {

        console.log("Customer details: ", res);
        // this.customer = res;
        // this.customer.set({res.id, res.name, res.email, res.phone});
        this.customer.set({
          id: res.id!,
          name: res.name,
          email: res.email,
          phone: res.phone
        });

      });
  }

  update() {
     const customerData = this.customer();

  this.customerService
    .updateCustomer(
      customerData.id,
      customerData
    )
    .subscribe(() => {

      this.router.navigate(['/customers']);

    });

    // this.customerService
    //   .updateCustomer(
    //     this.customer.id,
    //     this.customer
    //   )
    //   .subscribe(() => {

    //     this.router.navigate(['/customers']);

    //   });
  }
}