import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from '../../core/services/user.service';
import { UserResponse } from '../../core/models/user.model';

@Component({
  selector: 'app-get-data-from-api-modular',
  imports: [CommonModule],
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
}