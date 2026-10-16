import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  },
  {
    path: 'customers',
    loadComponent: () =>
      import('./pages/customer-list/customer-list')
      .then(m => m.CustomerListComponent)
  },
  {
    path: 'add-customer',
    loadComponent: () =>
      import('./pages/customer-add/customer-add')
      .then(m => m.CustomerAddComponent)
  },
  {
    path: 'edit-customer/:id',
    loadComponent: () =>
      import('./pages/customer-edit/customer-edit')
      .then(m => m.CustomerEditComponent)
  }
];