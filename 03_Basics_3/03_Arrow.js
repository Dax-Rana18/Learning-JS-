// arrow functions => this keywords => back to objects 
//currently we extracted that js engine from browser (since it was only found there) and made it standalone engines like node ,deno 
//! browser ke ander global object is window object ,that swhy we can capture all window events :like form submut ,capture 

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); //? talks about current value ,like here it is hitesh and value changed it talks about sam , so the context here lies within braces {}
    }

}
//why doest not arrow function has this keyword ? 



user.welcomeMessage()
user.username = "sam"  //here we have changed the value 
user.welcomeMessage()

console.log(this); // thsi would print {} since there is no global current context 

//* in node environment the current context is empty 


// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //it will only work in object but not in fucntions ,here it will print undefined
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
//this value is not used because in fucntion scope the values are not there in global scope so incase of only console.log(this) only global scope is printed  
// }


// chai()

//can save in vatiable 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//! in case of curly braces {} return eyword is required 

//* implicit return : no need of return statement ,values can also be put in parenthese ()
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})
//! while retrun an object you have to wrap it in parenrtheses () 

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


// so like () => () or () => { return }