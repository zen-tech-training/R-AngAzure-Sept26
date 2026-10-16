// ops-frontend/src/app/component/angular-basics/add-user/add-user.ts

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { UserService } from '../../../core/services/user.service';
import { CreateUser, UserResponse } from '../../../core/models/user.model';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);
  private snackBar = inject(MatSnackBar);

  userForm: FormGroup;
  isLoading = false;
  hidePassword = true;
  lastCreatedUser: UserResponse | null = null;

  roles = [
    { value: 0, label: 'Admin' },
    { value: 1, label: 'User' },
    { value: 2, label: 'Manager' }
  ];

  constructor() {
    this.userForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: [0, [Validators.required]],
      mobileNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const payload: CreateUser = this.userForm.value;

    this.userService.createUser(payload).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.lastCreatedUser = response;
        this.snackBar.open(`User created successfully with ID: ${response.id}`, 'Close', {
          duration: 4000,
          panelClass: ['success-snackbar']
        });
        this.userForm.reset({ role: 0 });
      },
      error: (err) => {
        this.isLoading = false;
        this.snackBar.open(`Error creating user: ${err.statusText || 'Server Error'}`, 'Close', {
          duration: 4000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }
}