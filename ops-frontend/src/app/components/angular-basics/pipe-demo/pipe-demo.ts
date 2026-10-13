import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MatTableModule, CommonModule],
  standalone: true,
  selector: 'app-pipe-demo',
  styleUrl: './pipe-demo.scss',
  templateUrl: './pipe-demo.html',
})
export class PipeDemo {
  displayedColumns: string[] = [
    'name',
    'upper',
    'lower',
    'title',
    'salary',
    'percent',
    'joinDate',
    'slice',
    'json'
  ];

  employees = [
    {
      id: 1,
      name: 'Tom Joseph',
      salary: 85000.567,
      performance: 0.92,
      joinDate: new Date('2024-01-15'),
      city: 'Pune'
    },
    {
      id: 2,
      name: 'john doe',
      salary: 65000.456,
      performance: 0.75,
      joinDate: new Date('2023-08-10'),
      city: 'Mumbai'
    },
    {
      id: 3,
      name: 'jane smith',
      salary: 72000.891,
      performance: 0.85,
      joinDate: new Date('2022-05-20'),
      city: 'Delhi'
    }
  ];
}
