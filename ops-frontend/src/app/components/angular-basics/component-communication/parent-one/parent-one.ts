import { Component } from '@angular/core';
import { ChildOne } from '../child-one/child-one';

@Component({
  imports: [ChildOne],
  selector: 'app-parent-one',
  styleUrl: './parent-one.scss',
  templateUrl: './parent-one.html',
})
export class ParentOne {
  name: string = 'Tom\'s';
  employeeArr: any[] = [
    { name: 'Tom', age: 25 },
    { name: 'Jerry', age: 30 },
    { name: 'Spike', age: 35 },
  ];
}