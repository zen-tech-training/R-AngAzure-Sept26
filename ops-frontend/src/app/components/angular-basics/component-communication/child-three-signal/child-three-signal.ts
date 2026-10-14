import { Component, input, output } from '@angular/core';
interface UserProfile {
  name: string;
  role: string;
}


@Component({
  imports: [],
  selector: 'app-child-three-signal',
  styleUrl: './child-three-signal.scss',
  templateUrl: './child-three-signal.html'
})
export class ChildThreeSignal {
  // 1. Declare a required signal input from the parent
  profile = input.required<UserProfile>();

  // 2. Declare an output stream to notify the parent
  onRoleChange = output<string>();

  promoteUser() {
    // 3. Emit the new role value up to the parent
    this.onRoleChange.emit('Admin');
  }
}
