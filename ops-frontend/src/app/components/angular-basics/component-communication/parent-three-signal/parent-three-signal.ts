import { Component, signal } from '@angular/core';
import { ChildThreeSignal } from '../child-three-signal/child-three-signal';

@Component({
  imports: [ChildThreeSignal],
  selector: 'app-parent-three-signal',
  styleUrl: './parent-three-signal.scss',
  templateUrl: './parent-three-signal.html',
})
export class ParentThreeSignal {

  // 1. Define a writable signal to hold the parent state
  currentUser = signal({
    name: 'Tom Joseph',
    role: 'Member'
  });

  // 2. Callback executed when the child triggers 'onRoleChange'
  updateUserRole(newRole: string) {
    this.currentUser.update(user => ({               //arrow function with single parameter and single LOC
      ...user,   //spread operator for shallow copy
      role: newRole
    }));
  }

}
