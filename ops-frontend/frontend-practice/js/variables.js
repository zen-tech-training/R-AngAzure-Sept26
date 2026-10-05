//Console.WriteLine("Hello");
console.log("Variable demo");
let no1=10 // local scope
var no2=20;  //Has function scope, hoist
const no3=30
console.log(no1+no2+no3);

function f1(){
    return 10;
}
console.log("f1 is called:", f1());

function f2(no1, no2){
    console.log(no1, no2);
    var no4=no1;
    var no5=no2;
    return no4+no5;
}
console.log("Calling f2() ", f2()); //undefined undefined -> NaN - Not a Number
console.log("Calling f2() ", f2(10));//10 undefined -> NaN - Not a Number
console.log("Calling f2() ", f2(10, 20));// 10 20 -> 30
console.log("Calling f2() ", f2("10", 20));// "10" 20 -> 1020


function f3(no1){
    return no1*no1;
}
console.log(f3(f2(10,20))); //900. 
//Here, the returned value of f2() will be passed as a parameter to f3()

console.log("var demo");
function f4(no1){
    var num1=no1;
    for(i=0; i<10; i++){
        console.log(no1*i);
    }
}
f4(11);


function f5(no1){    
    console.log("num1:", num1); //num1: undefined
    //console.log("j:", j);     //ReferenceError: j is not defined
    for(let j=0; j<10; j++){
        var num1=no1;          //var hoisting. Shifted to the top without value. Only the decalration part is hoisted at the top of a function
        num1++;
    }
    return num1;
}
console.log("Var demo1", f5(11));

const no4 = 10;
//no4 = 50;      //TypeError: Assignment to constant variable.



console.log("----------------------------------------");
function f6(str1){
    console.log("You are in f6");
    function f7(){
        console.log("You are in f7");
        function f8(){
            console.log("You are in f8");
            return str1;
        }
        return f8;
    }
    return f7;
}
console.log("f6 is called: ", f6("I work for ABC Pvt Ltd."));
// You are in f6
// f6 is called:  [Function: f7]


console.log("f6 is called: ", f6("I work for ABC Pvt Ltd.")());
// You are in f6
// You are in f7
// f6 is called:  [Function: f8]

console.log("------")
console.log("f6 is called: ", f6("I work for ABC Pvt Ltd.")()());
// You are in f6
// You are in f7
// You are in f8
// f6 is called:  I work for ABC Pvt Ltd.