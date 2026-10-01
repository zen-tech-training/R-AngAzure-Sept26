//File: src/app/core/services/api.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import fun1  from '../../../environments/environment'; //default exported function

@Injectable({
  providedIn: 'root'
})
export default class ApiService {
  protected http = inject(HttpClient);
  protected readonly apiUrl = environment.apiUrl;
  protected readonly funct = fun1;
}