//! objects and events most important in js

// singleton : apne tarah ka ek object otherwise multiple instances
//while declare as literal :not singelton 
//while declaring from constructor :singleton

// Object.create => constructor method ,singleton


// object literals
const mySym = Symbol("key1")


const JsUser = {
    //name : automaticall processed as string "name" :value 
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", //! declaring symbol in square bracets otherwise its not symbol it becomes string 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//? 2 ways
// console.log(JsUser.email)
// console.log(JsUser["email"])

// [] :useful when key has white apce in between like full name
// console.log(JsUser["full name"])

//printing symbol
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) => you cant change the value 
JsUser.email = "hitesh@microsoft.com"
// Object.freeze(JsUser) 
JsUser.email = "dax@microsoft.com"
// console.log(JsUser); //the value of email picks before freeze

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //=> reference to same object :this
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());