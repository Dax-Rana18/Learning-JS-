// array
// () => parentheses 
// [] => brackets 
// {} => braces

//arrays are resizable
// shallow and deep copies :
//  A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. //heap
// deep copy:A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.  //stack

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//! ---------- Array methods -------------

myArr.push(6) // => add elements in last
myArr.push(7)
myArr.pop() //remove last va;ue

myArr.unshift(9) //* => insert at start [9,0,1,2,3,4] //,not optimised
myArr.shift() //* remove first element
console.log(myArr)

//* console.log(myArr.includes(9)); //if not exist return -1
// console.log(myArr.indexOf(3));

//* const newArr = myArr.join() ==> add all element of array in string , join as well as convert to string

// console.log(myArr);
// console.log( newArr);


//?  slice => returns a new array instead of changing the existing one 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

// ? splice => chs nges original array and in new returns the spliced part

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);