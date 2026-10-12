// ops-frontend/src/app/component/angular-basics/angular-basics.routes.ts
import { Routes } from '@angular/router';

export const angularBasicsRoutes: Routes = [
  {
    path: 'oneway-twoway-binding',
    loadComponent: () =>
        import('./one-way-two-way-data-binding/one-way-two-way-data-binding').then((m) => m.OneWayTwoWayDataBinding),
  },  
];
