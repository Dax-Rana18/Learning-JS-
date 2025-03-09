//automatically detects datatype Number
const score = 400
console.log(score);

//explicitely define datatype
const balance = new Number(100)
console.log(balance);

// console.log(balance.toString().length);
//* console.log(balance.toFixed(1)); precisino value in decimal like 100.000 ,fix to 2 decimal place

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(6));

const hundreds = 1000000
//toLocaleString
//by default in us system like in millions 
//spalit based on indian value sustem=> 10,00,000
console.log(hundreds.toLocaleString('en-IN'));

// Number.MAX_VALUE

//! +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5)); => 5
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); //alwyas between 0 and 1
console.log((Math.random()*10) + 1); //minimum value is 1 now 
console.log(Math.floor(Math.random()*10) + 1);//round off to lowest no. => bacilaly used to get lowest number


//trick for random :generic syntax follow krlo
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //to get value above 10 we use +min and within range I use max-min+1 (range above 0)