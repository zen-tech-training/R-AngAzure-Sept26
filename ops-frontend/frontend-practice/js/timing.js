//setTimeout() is an asynchronous function
function f1(){
    console.log("F1 is called");
}
setTimeout(f1);
const f2 = ()=>{
    console.log("F2");
}
setTimeout(f2, -9000); //-9000=>1
setTimeout( ()=>{
    console.log("F3")
}, 30);
//============================================
for(let i=0; i< 123456; i++){
    if(i%100==0 && i%8==0 && i%13==0 && i%17==0){
        console.log(i);
    }
}
setTimeout( ()=>{
    console.log("F4")
    clearInterval(intervalId);
}, 10000);

//=============================================
const intervalId = setInterval(f1,1500); //1500*6 = 9000

