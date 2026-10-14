import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-child-two',
  // templateUrl: './child-two.html',
  template: `
  <p>Child component Start</p>
  <button (click)="sendDeleteSignal()">Delete Item</button>
  <p>Child component End</p>
  `
})
export class ChildTwo {
  // 1. Declare the Output decorator and instance of EventEmitter
  @Output() onMyDelete = new EventEmitter<number>();

  sendDeleteSignal() {
    // 2. Emit the data
    this.onMyDelete.emit(888);
  }

}
