
//* reduce method 


const myNums = [1, 2, 3];

// ✅ Reduce with detailed logging
const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc}, currval: ${currval}`);
    return acc + currval;
}, 2);
console.log(myTotal); // Output: 8


// ✅ Reduce with arrow function (short syntax)
const myTotal2 = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal2); // Output: 6



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);


/*
📌 Summary of Key Methods
Method	     Returns a New Array?	    Used for?
forEach()	❌ No	Running a function on each element
filter()	✅ Yes	Selecting elements based on a condition
map()	    ✅ Yes	Transforming elements in an array
reduce()	✅ No(returns single value)	Accumulating values (sum, product, etc.)

*/