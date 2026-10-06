
const empArr = [
    {id: 1008, name: "John", age: 30, address: {city: "New York", state: "NY"}},
    {id: 1254, name: "Jane", age: 25, address: {city: "Los Angeles", state: "CA"}},
    {id: 88, name: "Samir", age: 15, address: {city: "Los Angeles", state: "CA"}},
];

console.log("----------------- Closure V1 -----------------------");
function f6(empArr){
    var filteredEmpArray = empArr;
    for(let i=0;i<filteredEmpArray.length;i++){
        console.log(filteredEmpArray[i].name, filteredEmpArray[i].address.city);
    }
    function ageWiseFilter(age){
        console.log("Age: ", age);        
    }
    return ageWiseFilter;
}
// console.log("The returned thing from f6", f6(empArr));
// f6(empArr)(16);


console.log("----------------- Closure v2 -----------------------");
function f6(empArr){
    var filteredEmpArray = empArr;
    
    function ageWiseFilter(age){
        console.log("Age: ", age);
        for(let i=0;i<filteredEmpArray.length;i++){
            if(filteredEmpArray[i].age > age)
                console.log(filteredEmpArray[i].name, filteredEmpArray[i].address.city);
        }                
    }
    return ageWiseFilter;
}
// console.log("The returned thing from f6", f6(empArr));
// f6(empArr)(16);


//Closure
// the var variable declard inside the outer function will be modifiable by the inner function.
// The modified variable will be retained(will not be destroyed) even if outer function finishes the execution.

console.log("----------------- Closure v3 - Actual Closure -----------------------");
function outerFun(ctr){
    var counter=ctr;
    
    function innerFun(){
        counter++;  //counter = counter + 1;        
        console.log("Current Counter value: ", counter);
        // return counter;      
    }
    return innerFun;
}
let innerFuncRef = outerFun(1005);
innerFuncRef();
innerFuncRef();
innerFuncRef();
innerFuncRef();
// console.log(counterResult);
