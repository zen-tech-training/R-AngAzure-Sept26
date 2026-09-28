import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GetDataFromApi } from './components/get-data-from-api/get-data-from-api';

@Component({
  imports: [RouterOutlet, GetDataFromApi],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ops-frontend');
}
