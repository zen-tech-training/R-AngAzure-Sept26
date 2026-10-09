// ops-frontend/src/app/components/navbar/navbar.ts
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  isGreyGreenTheme = signal<boolean>(false);

  // Top 3 Items
  basicsTopLinks = [
    // { label: 'Property Binding', path: '/angular-basics/property-binding' },
    // { label: 'Event Binding', path: '/angular-basics/event-binding' },
    // { label: 'Two-Way Binding', path: '/angular-basics/twoway-binding' },
    { label: 'Simple Material UI', path: '/smu' },
    { label: 'Get Data From API', path: '/gdfa' },
    { label: 'Get Data From API Modular', path: '/gdfam' },
    { label: 'Register User', path: '/register-user' }
  ];

  // 4th Item Sub-menu Options (Component Communication)
  communicationLinks = [
    { label: 'With @Input()', path: '/angular-basics/component-communication-Input' },
    { label: 'With @Output() & EventEmitter', path: '/angular-basics/component-communication-Output-EventEmitter' },
    { label: 'With ViewChild / Template Reference', path: '/angular-basics/component-communication-ViewChild' },
    { label: 'With Shared Service / Subject', path: '/angular-basics/component-communication-Service' }
  ];

  // Rest of the Main Menu Items
  basicsBottomLinks = [
    { label: 'Pipes', path: '/angular-basics/pipe' },
    { label: 'RxJS Observables', path: '/angular-basics/rxjs-demo' },    
    { label: 'Life Cycle Methods', path: '/angular-basics/life-cycle' },
    { label: 'Add User', path: '/angular-basics/add-user' },
    { label: 'Get All Users', path: '/angular-basics/get-all-users' },
    { label: 'Get Put Delete Users', path: '/angular-basics/get-put-delete-users' },
    { label: 'Get Patch User', path: '/angular-basics/get-patch-user' },
    { label: 'PrimeNG Form', path: '/angular-basics/prime-ng-form' },
    { label: 'One-Way / Two-Way', path: '/angular-basics/oneway-twoway' },
    { label: 'NgFor Demo', path: '/angular-basics/ngfor' }
  ];

  // angularBasicsLinks = [
  //   // { label: 'Simple', path: '/angular-basics/simple' },
  //   { label: 'Property Binding', path: '/angular-basics/property-binding' },
  //   { label: 'Event Binding', path: '/angular-basics/event-binding' },
  //   { label: 'Two-Way Binding', path: '/angular-basics/twoway-binding' },
  //   { label: 'Component Communication - @Input()', path: '/angular-basics/component-communication-Input' },
  //   { label: 'PrimeNG Form', path: '/angular-basics/prime-ng-form' },
  //   { label: 'Life Cycle Methods', path: '/angular-basics/life-cycle-host' },
  //   { label: 'Pipes', path: '/angular-basics/pipe' },
  //   { label: 'One-Way / Two-Way', path: '/angular-basics/oneway-twoway' },
  //   { label: 'NgFor Demo', path: '/angular-basics/ngfor' }
  // ];

  toggleTheme() {
    this.isGreyGreenTheme.update(prev => !prev);
    document.body.classList.toggle('grey-green-theme', this.isGreyGreenTheme());
  }
}

// import { Component } from '@angular/core';
// import { RouterLink, RouterLinkActive } from '@angular/router';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';

// @Component({
//   selector: 'app-navbar',
//   standalone: true,
//   imports: [
//     RouterLink,
//     RouterLinkActive,
//     MatToolbarModule,
//     MatButtonModule,
//     MatIconModule
//   ],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.scss'
// })
// export class Navbar {   //Named export

// }

// export class SecondNavbar{ }   //Named export

export default class ThirdNavbar{  //Default export


}



// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-navbar',
//   styleUrl: './navbar.scss',
//   templateUrl: './navbar.html',
// })
// export class Navbar {}
