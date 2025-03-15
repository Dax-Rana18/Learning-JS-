//* map methods
// map() creates a new array by modifying each element.
// Useful for transformations like adding values or changing data types.
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ✅ Simple mapping (adds 10 to each element)
const newNums = myNumbers.map(num => num + 10);
console.log(newNums);

// ✅ Chaining multiple map functions
const processedNums = myNumbers
    .map(num => num * 10) // Multiply by 10
    .map(num => num + 1) // Add 1
    .filter(num => num >= 40); // Keep numbers >= 40
console.log(processedNums);


//forEcah used for:	Running operations (e.g., logging)
// map() :	Transforming values

//? example
/*
const nums = [1, 2, 3];

 ✅ `forEach()` (does not return new array)
nums.forEach(num => console.log(num * 2)); // Just logs values

 ✅ `map()` (creates a new array)
const doubled = nums.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

*/