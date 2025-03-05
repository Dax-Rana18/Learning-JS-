//  Primitive

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.
*/ 
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') 
const anotherId = Symbol('123') //not same

console.log(id === anotherId); //false

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3


//*+++++++++++++++++++++++++++++++++++++++++++++
//? STACK AND HEAP MEMORY
//* Stack (Primitive) => jo bhi varibale declare kra uska ek copy milta hai

//! Heap(Non-primitive) => we get reference of original value , jo bhi change also affect original value 

let myyt="afkhehe";
let anothername=myyt
anothername="daxyboii"
console.log(anothername);
console.log(myyt); 

let userOne={
    email:"user@google.com",
    upi:"user@api"
}
let userTwo=userOne; // here getting refernece
userTwo.email="daxyboyy@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
