// Run the below commands:
// npm install -g ts-node typescript
// nodemon array.ts

import { find } from "rxjs";

const numArr: number[] = [10, 20, -87, 0, 78, 56, 45, 56, 0, 0, 10, -20];
console.log(numArr);

for(let i=0; i<numArr.length; i++){
}

console.log(numArr.map((curEle)=> curEle*curEle)); //[]1*12=>[]1*12
console.log(numArr);

let resultOne: number[] | number | undefined | boolean;

resultOne = numArr.filter((curEle)=> curEle >=0 );
console.log("Filtered Array: ", resultOne);

resultOne = numArr.find((curEle)=> curEle == 0 );
console.log("Find: ", resultOne);

resultOne = numArr.find((curEle)=> curEle == -87 );
console.log("Find: ", resultOne);

resultOne = numArr.find((curEle)=> curEle ==9999 );
console.log("Find: ", resultOne);


// filter vs find
// filter returns an array or empty array
// find returns a single element or undefined

//1000 records are present in the array
//Search -> filter
//Search for orderid -> find -> 


resultOne = numArr.every((curEle)=> { return curEle < 79 }  );
console.log("every : ", resultOne);
