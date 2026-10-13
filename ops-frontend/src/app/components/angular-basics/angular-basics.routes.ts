// ops-frontend/src/app/component/angular-basics/angular-basics.routes.ts
import { Routes } from '@angular/router';
import { PipeDemo } from './pipe-demo/pipe-demo';
import { ParentOne } from './component-communication/parent-one/parent-one';

export const angularBasicsRoutes: Routes = [
  {
    path: 'oneway-twoway-binding', //www.myweb.com/angular-basics/oneway-twoway-binding
    loadComponent: () =>
        import('./one-way-two-way-data-binding/one-way-two-way-data-binding').then((m) => m.OneWayTwoWayDataBinding),
  },
  { path: 'pipe-demo', component: PipeDemo },  //www.myweb.com/angular-basics/pipe-demo
  { path: 'parent-one', 
    loadComponent: () =>
        import('./component-communication/parent-one/parent-one').then((m) => m.ParentOne),}
    
    // component: ParentOne },  //www.myweb.com/angular-basics/Parent-one
];
