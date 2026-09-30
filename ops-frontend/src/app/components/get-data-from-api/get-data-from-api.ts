import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-data-from-api',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-data-from-api.html',
  styleUrl: './get-data-from-api.scss'
})
export class GetDataFromApi {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
  users = signal<any[]>([]); //useState() in react
  errorMessage = signal('Initial errrroooorr');
  
  constructor(private myHttpObj: HttpClient) {}
  
  getUsers(): Observable<any[]> {
    return this.myHttpObj.get<any[]>(this.apiUrl);
  }

  loadUsers(): void {
    this.getUsers().subscribe({
      next: (data) => {
        this.users.set(data);
        this.errorMessage.set('');
        console.log('Users loaded successfully:', data);
      },
      error: (err) => {
        console.error(err);
        this.errorMessage.set('Failed to load users.');
      }
    });
  }
}






// Bug: We need to click button twice to show the data on a browser. 
// First click  -> Fetching data and storing it in the "users" variable. It is visible in the console window.

// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-get-data-from-api',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './get-data-from-api.html',
//   styleUrl: './get-data-from-api.scss'
// })
// export class GetDataFromApi { //implements OnInit {

//   private apiUrl = 'https://jsonplaceholder.typicode.com/users';

//   users: any[] = [];
//   errorMessage: string = '';
//   //variableName: dataType = initialValue; //TypeScript
//   //dataType variableName = initialValue; //.Net

//   constructor(private myHttpObj: HttpClient) {} //DI
  
//   // ngOnInit(): void { //void is a return type that indicates the function does not return a value
//   //   // this.loadUsers(); //It is fetching the data from the API.
//   // }

//   getUsers(): Observable<any[]> {
//     return this.myHttpObj.get<any[]>(this.apiUrl); //async-await //React - await axios.get("apiUrl");
//   }

//   loadUsers(): void {
//     this.getUsers().subscribe({ //Passing object as a parameter to the subscribe method.
//       next: (data) => {   //First key:value. here value is a function. Arrow function is taking one parameter "data" and it has 2 LOCs/ 2 statements. 
//         this.users = data;
//         this.errorMessage = '';
//         console.log('Users loaded successfully:', data);
//       },
//       error: (err) => {  //Second key:value. TimeOutError/ NetworkError/ 404 Error/ 500 Error/ 403 Error/ 401 Error
//         console.error(err);
//         this.errorMessage = 'Failed to load users.';
//       }
//     });
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http'; //axios is an alternative in React
// import { Observable } from 'rxjs';
// import { CommonModule } from '@angular/common';

// @Component({
//   imports: [HttpClient, CommonModule],
//   // standalone: true,
//   selector: 'app-get-data-from-api',
//   styleUrl: './get-data-from-api.scss',
//   templateUrl: './get-data-from-api.html',
// })
// export class GetDataFromApi implements OnInit {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/users';
//   users: any[] = [];
//   errorMessage: string = '';

//   constructor(private http: HttpClient) {}

//   ngOnInit(): void {
//     this.getUsers().subscribe({
//       next: (data) => this.users = data,
//       error: (err) => this.errorMessage = 'Failed to load users.'
//     });
//   }

//   // 1. GET Request (Fetches typed array of Users)
//   getUsers(): Observable <any>{
//     return this.http.get<any>(this.apiUrl);
//   }
// }
