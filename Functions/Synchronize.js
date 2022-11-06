console.log("*****Synchronize or blocking*****");
console.log("Hi");
console.log("Hello");
console.log("How are you?");

console.log("*****Asynchronize or non blocking*****");
console.log("Hi");
setTimeout(()=>
{
    console.log("Hello");
},3000);

console.log("How are you?");


