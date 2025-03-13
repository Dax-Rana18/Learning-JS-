
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName() => fumction execution 

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5) //arguments in brackets 

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ //you can also give default values but it will have lower scope than argument passed value 
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("daxy boii"))
// console.log(loginUserMessage() // if no value is there then it prints undefined 
 //*............................................................next video......................................

 //when you dont knwo how many parameters will come => rest operator is used 
function calculateCartPrice(...num1){ //... -> rest operator
    return num1  //=> we got an array
}
//... -> depends on use case can be called as rest operator as well as spread operator 
console.log(calculateCartPrice(200, 400, 500, 2000))
// .........................................................
function calculateCartPrice(val1, val2, ...num1){ //... -> rest operator
    return num1  //=> here only the array part is printed since we only called to return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))


//?........................................................
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user) => directly object in argument
//or you can make urself 
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray)); //either in variable 
console.log(returnSecondValue([200, 400, 500, 1000])); //or directly