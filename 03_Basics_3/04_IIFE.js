// Immediately Invoked Function Expressions (IIFE)

//global scope does not pollute the fucntion 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
// function terminator ; is very imprtamt here 
// ()()
// (): fucntion definition , () : execution call
//now we instead of execution call after chai() we just wrapped the fucntion in parenthese 

( (name) => {
    //unnammes IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') //taken as paraameter , and above taken as argument 
