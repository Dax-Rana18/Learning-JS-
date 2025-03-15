const coding = ["js", "ruby", "java", "python", "cpp"]

/*
we usually write functions like this 
coding.forEach(function name(){ })
but since its a callback fucntion no need for name and since it will print values you can give any keyword for your value */

// coding.forEach( function (val){
//     console.log(val);
// } )
//..............................
//*use arrow function 
// basically hum aise krte the:
// coding.forEach( greet = (item) => {
//     console.log(item);
// } )

// but since its call back we remove func name like this:
// coding.forEach( (item) => {
//     console.log(item);
// } )
//................................................
//* we can make fucntion somewhere alse and give its reference(name only) and not execute it there (func())
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//...............................................
//otehr paramaters in forEach provides
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )
//.................................................
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )