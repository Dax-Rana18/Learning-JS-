// const tinderUser = new Object() //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//access values with dot notation or [] -> can do further nesting
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } //=> give object of objects
// const obj3 = Object.assign({}, obj1, obj2, obj4) //{}=> optional parameter but gurantees that it will return an object


//? best practice => spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

//values from database: array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //gives all keys: datatype is array
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); //key value pair :array of array

console.log(tinderUser.hasOwnProperty('isLoggedOut'));

//otehr methods in prototype 

//!----------------------------------------------------- next video------------------------------------------------

//! objects getting destructured 
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor} =course;
const {courseInstructor: instructor} = course //basically used for extarcting values like when we take values from react 
//you can also shorten name with {courseInstructor to instructor}

// console.log(courseInstructor);
console.log(instructor);

/*
const navbar = ({company})=>{ //here destructuring is taking place :not taking new name but converting that property to that variable 

}
navbar(company="Dax");
*/


//! also arrays get destuctured : we will do later 



//* concept of api :apka kaam kisi aur ke sir pr ,eg google login 
//value used to come in xml structure but now come in json(object)

//apis in similar format like below 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// only for understanding

//sometimes apis in arrays format, so we use array functions 
[
    {},
    {},
    {}
]
