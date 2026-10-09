import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../core/services/user.service';

@Component({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  standalone: true,
  selector: 'register-user',
  styleUrl: './register-user.scss',
  templateUrl: './register-user.html',
})
export class RegisterUser {
  private readonly userService = inject(UserService);

  readonly isSubmitting = signal(false);
  readonly submissionMessage = signal<string | null>(null);
  readonly submissionError = signal<string | null>(null);

  readonly registrationForm = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    phone: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  saveUser(): void {
    if (this.registrationForm.invalid || this.isSubmitting()) {
      // alert('Please fill in all required fields correctly before submitting.');
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    this.submissionMessage.set(null);
    this.submissionError.set(null);

    this.userService.createUser(this.registrationForm.getRawValue()).subscribe({
      next: () => {
        this.registrationForm.reset();
        this.submissionMessage.set('User registered successfully.');
        this.isSubmitting.set(false);
      },
      error: () => {
        this.submissionError.set('Unable to register the user. Please try again.');
        this.isSubmitting.set(false);
      },
    });
  }
}
