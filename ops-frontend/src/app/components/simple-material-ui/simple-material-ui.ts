//File : ops-frontend/src/app/components/simple-material-ui/simple-material-ui.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'simple-material-ui',
  
  styleUrl: './simple-material-ui.scss',
  templateUrl: './simple-material-ui.html',
  // templateUrl: './get-data-from-api-modular.html',
  standalone: true,
  imports: [MatCardModule, MatButtonModule]
})
export class SimpleMaterialUI {}


// import { Component } from '@angular/core';

// @Component({
//   imports: [],
//   selector: 'app-simple-material-ui',
//   styleUrl: './simple-material-ui.scss',
//   templateUrl: './simple-material-ui.html',
// })
// export class SimpleMaterialUI {}
