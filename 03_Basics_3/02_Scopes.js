//var c = 300 => with var value gets modified from global scope to block scope thus crating confusion and infefficiency so we dont use var
let a = 300

// here {} are scope
//this is block scope 
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a); print a in block scope
    
}
//outwards in global scope


// console.log(a);
// console.log(b);
// console.log(c);

//? teh scope in console of browser is different and the scope in running from node environment is different ,why tho? with a keyword
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}