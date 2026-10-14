import { Component } from '@angular/core';
import { ChildTwo } from '../child-two/child-two';

@Component({
  imports: [ChildTwo],
  selector: 'app-parent-two',
  styleUrl: './parent-two.scss',
  templateUrl: './parent-two.html',
})
export class ParentTwo {

  handleDelete(id: number) {
    alert(`Parent received delete request for item ID: ${id}`);
    console.log(`Parent received delete request for item ID: ${id}`);
    // Your logic to delete the item from an array or database goes here
  }
}
