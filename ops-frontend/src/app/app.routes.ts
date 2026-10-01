//File : ops-frontend/src/app/app.routes.ts
import { Routes } from '@angular/router';
import { SimpleMaterialUI } from './components/simple-material-ui/simple-material-ui';
import { App } from './app';


export const routes: Routes = [
    { path: '', component: App },
    { path: 'smu', component: SimpleMaterialUI },
    {path: 'gdfa', loadComponent: () => import('./components/get-data-from-api/get-data-from-api').then(m => m.GetDataFromApi)},
    { path: '**',    //It will handle all non matching routes
      redirectTo: '' //Redirect to root route
    }
];
