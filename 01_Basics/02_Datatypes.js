/*
*Stack Memory(Primitive types like Number, Boolean, String) → Stores primitive values and function calls (fixed-size, fast) ->Copies the value
*Heap Memory(Objects, Arrays, Functions)  → Stores objects and reference types (dynamic size, slower)->  Copies the reference (not the value)

?Stack Memory Example (Primitives)
let x = 10;
let y = x; // Copy is created

y = 20;
console.log(x); // 10 (unchanged)
console.log(y); // 20

? Heap Memory Example (Objects)
let obj1 = { name: "Paaji" };
let obj2 = obj1; // Reference is copied

obj2.name = "Hacker";
console.log(obj1.name); // "Hacker" (both point to same object)

!Stack memory diagram :
Stack:
|  x  | -> 10 |
|  y  | -> 20 | (copy, independent of x)

heap memory diagram :
Stack:                 Heap:
| obj1 | ---> [ { name: "Paaji" } ]  
| obj2 | ---^ (same reference, not a copy)





 */


"use strict"; //treat all JS code as newer version: otehrwise automatic only 

//alert("hello") //run on js engine in browser, we are using nodeJs not browser

//*we usually avoid semicolons 
//*readibility of code 
// console.log(3+3); console.log("Dax")

let name="Dax"
let ag=18
let isLoggedIn=false;

//number => 2 to the power of 53
//bigInt
//string=> ""
//boolean => true / false
//null => standalone value ,representation of empty value 
//undefined => not defined value to a declared variable ,like let a;
//symbol => unique

//object 

console.log(typeof undefined); //undefined

console.log(typeof null); //object

