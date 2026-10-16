// import { Service } from '@angular/core';

// @Service()
// export class Customer {}


import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'http://localhost:3000/customers';

  customers = signal<Customer[]>([]);

  constructor(private http: HttpClient) {
  }

  loadCustomers() {
    this.http.get<Customer[]>(this.apiUrl)
      .subscribe(data => {
        this.customers.set(data);
      });
  }

  getCustomerById(id: string | null) {
    return this.http.get<Customer>(
      `${this.apiUrl}/${id}`
    );
  }

  addCustomer(customer: Customer) {
    return this.http.post<Customer>(
      this.apiUrl,
      customer
    );
  }

  updateCustomer(id: string | null, customer: Customer) {
    return this.http.put(
      `${this.apiUrl}/${id}`,
      customer
    );
  }

  deleteCustomer(id: number) {
    return this.http.delete(
      `${this.apiUrl}/${id}`
    );
  }
}