import { Component, inject} from '@angular/core';
import { UserService } from '../../core/services/user.service';

@Component({
  imports: [],
  standalone:true,
  selector: 'register-user',
  styleUrl: './register-user.scss',
  templateUrl: './register-user.html',
})
export class RegisterUser {
  private userService= inject(UserService);

  saveUser(){
    this.userService.createUser({name:"Tom", username:"tom", phone:"91-666565656", email:"tom@ops.com"}).subscribe({
      next: (data) => {
        // this.users.set(data);
        console.log('Fetched Users:', data);
        // this.isLoading.set(false);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        // this.isLoading.set(false);
      }
    });;
  }

  // C#
  // string username = String.Empty;
  // void CreateUser(){}

}
