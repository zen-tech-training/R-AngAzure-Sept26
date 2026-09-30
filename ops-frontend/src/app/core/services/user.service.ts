//File: ops-frontend/src/app/core/services/user.service.ts

// ops-frontend/src/app/core/services/user.service.ts

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { UserResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiService {
//   createUser(userData: CreateUserRequest): Observable<UserResponse> {
//     return this.http.post<UserResponse>(this.apiUrl, userData);
//   }

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(`${this.apiUrl}/Users`);
  }

//   updateUser(id: number, userData: CreateUserRequest): Observable<UserResponse> {
//     return this.http.put<UserResponse>(`${this.apiUrl}/Users/${id}`, userData);
//   }

//   patchUser(id: number, patchData: PatchUserRequest): Observable<void> {
//     // API returns 204 No Content
//     return this.http.patch<void>(`${this.apiUrl}/Users/${id}`, patchData);
//   }

//   deleteUser(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/Users/${id}`);
//   }
}
