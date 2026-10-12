import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { TokenStorageService } from '../../core/services/token-storage.service';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-login',
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {
  private readonly authService = inject(AuthService);
  private readonly tokenStorageService = inject(TokenStorageService);

  onLogin() {
    this.authService.login({username: 'testuser', password: 'testpassword'}).subscribe({
      next: (data:any) => {
        console.log('Login successful', data);
        // data.token = 'dummy-token-123456'; // Assign a dummy token for demonstration purposes
        this.tokenStorageService.setToken(data[0].token);
      },
      error: () => {
        console.log('Login failed');
      },
    });
    // Implement login logic here
    alert('Login button clicked');

  }
}
