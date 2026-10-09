import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../core/services/user.service';
import { UserResponse } from '../../core/models/user.model';

import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'get-data-from-api-modular',
  imports: [
    CommonModule, 
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    MatCardModule],
  styleUrl: './get-data-from-api-modular.scss',
  templateUrl: './get-data-from-api-modular.html',
})
export class GetDataFromApiModular {

  private userService = inject(UserService);

  users = signal<UserResponse[]>([]);

  isLoading = signal(false);

  fetchUsers(): void {

    this.isLoading.set(true);

    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        console.log('Fetched Users:', data);
        this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.isLoading.set(false);
      }
    });
  }

  deleteUser(id:number){
    // alert("dedddddddddddd");
    this.userService.deleteUser(id).subscribe({
      next: (data) => {
        // this.users.set(data);
        console.log('Deleted User:', data);
        // this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error deleting user:', err);
        // this.isLoading.set(false);
      }
    });
  }
}