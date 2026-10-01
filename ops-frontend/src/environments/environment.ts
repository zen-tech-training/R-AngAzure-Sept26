//File: ops-frontend/src/environments/environment.ts
export const environment = {    //named export
  production: false,
  apiUrl: 'https://jsonplaceholder.typicode.com/'
};


const dummyFunction = () =>{
  return "You have called the dummy function from environment.ts file";
};
export default dummyFunction;

// int a = 10;