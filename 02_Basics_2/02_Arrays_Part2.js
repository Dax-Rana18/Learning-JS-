const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman","hehe"]

// marvel_heros.push(dc_heros) => pushes it as an array in existing array, wont combine it

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); => to access that element

const allHeros = marvel_heros.concat(dc_heros) //=> merger and print as a new array
console.log(allHeros);
console.log(typeof(allHeros))


// ? spread operator : every element is individual
const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //recusively concat to a certain depth
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) //.check if array or not
console.log(Array.from("Hitesh")) // Creates an array from an iterable object. 

//! this s a special case :objects are not iterable
console.log(Array.from({name: "hitesh"})) // interesting=> keys ka array ya values ka array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //Returns a new array from a set of elements.