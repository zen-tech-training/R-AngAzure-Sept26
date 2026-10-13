import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  imports: [CommonModule, MatCardModule,
    MatListModule,
    MatDividerModule],
  selector: 'app-child-one',
  styleUrl: './child-one.scss',
  templateUrl: './child-one.html',
})
export class ChildOne {
  @Input() greeting: string = '';
  @Input() msg: string = '';
  @Input() third!: string;
  @Input() employeeArray: any[] = [];
}
