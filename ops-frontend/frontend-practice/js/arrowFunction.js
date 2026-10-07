f3; //
f1();
var data = [
    {id: 1, name: "John", age: 30, address: {city: "New York", state: "NY"}, hobbies:["reading", "traveling"], 
    skills:[{name:"JavaScript", level:"Intermediate"}, {name:"Python", level:"Beginner"}]},

    {id: 2, name: "Jane", age: 25, address: {city: "Los Angeles", state: "CA"}, hobbies:["cooking", "hiking"], 
    skills:[{name:"Java", level:"Advanced"}, {name:"C++", level:"Intermediate"}]},
]


f1();
// f2; //ReferenceError: Cannot access 'f2' before initialization
// f2(); //ReferenceError: Cannot access 'f2' before initialization
// f3() //TypeError: f3 is not a function
console.log("f3--------------> ",f3);  //f3-------------->  undefined

function f1(){
    var no1=10; //function level scope
    console.log(no1);
    console.log(data);
}

const f2 = ()=>{                  //const and let are not hoisted
    console.log("I am in f2")
    console.log(data[1].skills);
}
f2();

var f3 = ()=>{                     //var variable hoisting
    console.log("I am in f3")
    console.log(data[1].skills);
}
f3();

console.log("4 Types of Arrow Function Syntaxes");
//Type 1 - No parameter
const arf1 = ()=>"First type of Arrow function is called";
// const arf1 = ()=> {return "First type of Arrow function is called"};
let result;
result = arf1();
console.log(result);

//Type 2  - Single parameter, Single statement 
const arf2 = (_)=> _;
result = arf2({id:89, name:"Tom Joseph"});
console.log("Type 2 Arrow Function: ", result);


//Type 3 - Single parameter, Single statement
const arf3 = (param1)=> param1 + param1;
result = arf3(10);
console.log("Type 3 Arrow Function: ", result);
result = arf3("Tom");
console.log("Type 3 Arrow Function: ", result);


//Type 4- Any number of parameter(0 or more), Multiple statements
const arf4 = (param1)=> {
    const res = param1 + param1;
    return res;  //return is mandatory to return the result to the caller
}
result = arf4(10);
console.log("Type 4 Arrow Function: ", result);
result = arf4("Tom");
console.log("Type 4 Arrow Function: ", result);


for(k=0; k<10; k++){
    console.log("k", k);
}