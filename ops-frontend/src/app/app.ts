import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { GetDataFromApi } from './components/get-data-from-api/get-data-from-api';
// import { GetDataFromApiModular } from './components/get-data-from-api-modular/get-data-from-api-modular';
// import { SimpleMaterialUI } from './components/simple-material-ui/simple-material-ui';
import { Navbar } from './components/navbar/navbar';
import { RegisterUser } from './components/register-user/register-user';

@Component({
  // imports: [RouterOutlet, GetDataFromApi, GetDataFromApiModular, SimpleMaterialUI, Navbar],
  imports: [RouterOutlet, Navbar, RegisterUser],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ops-frontend');
}
