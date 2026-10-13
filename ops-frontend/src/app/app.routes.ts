//File : ops-frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SimpleMaterialUI } from './components/simple-material-ui/simple-material-ui';
import { App } from './app';
import { Login } from './components/login/login';
import { angularBasicsRoutes } from './components/angular-basics/angular-basics.routes';


export const routes: Routes = [
    // { path: '', component: App },
    { path: 'login', component: Login },
    { path: 'smu', component: SimpleMaterialUI },
    { path: 'gdfa', loadComponent: () => import('./components/get-data-from-api/get-data-from-api').then(m => m.GetDataFromApi)},
    { path: 'gdfam', loadComponent: () => import('./components/get-data-from-api-modular/get-data-from-api-modular').then(m => m.GetDataFromApiModular)},
    { path: 'register-user', loadComponent: () => import('./components/register-user/register-user').then(m => m.RegisterUser)},
    { path: 'angular-basics', children: angularBasicsRoutes}, //www.myweb.com/angular-basics

    { path: '**',    //It will handle all non matching routes
      redirectTo: '' //Redirect to root route
    },
];
