//File: ops-frontend/src/app/core/services/auth.service.ts

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import  ApiService  from './api.service';
import { Login, LoginResponse} from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService { //extends MyApiService {
  
  login(loginCredential: Login): Observable<LoginResponse[]> {
    //return this.http.post<LoginResponse[]>(`${this.apiUrl}auth` , loginCredential);
    
    // Mocked response for demonstration purposes
     return of([{
      id: 1, 
      username: loginCredential.username, 
      role: "admin", 
      token: "dummy-token-123456789-abcdefghijkl"
    }]); 
    // return {id: 1, username: loginCredential.username, role: "admin", token: "dummy-token-123456789-abcd"} as unknown as Observable<LoginResponse[]>; 
    
  }
}