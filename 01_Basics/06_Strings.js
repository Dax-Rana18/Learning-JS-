//! Strings are primitive datatypes , stored in stack memory and their values cannto be changes directly

const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); deprecated

//! String interpolation => `` use back tick ,variable eject ${ }
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//anotehr way to declare string => invoking object
const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__.toUpperCase()); =. to check prototype and their methods : like object and methods of string class


// console.log(gameName.length);
// console.log(gameName.toUpperCase()); => orignila values doesnt get changed because its a primitive datatype
console.log(gameName.charAt(2)); 
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4) //can put -ve value also ,counts from reverse 
console.log(anotherString);


//user deliberately puts extra space
const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"


// %20 => url encodong for whitespace
//url.replace('%20','-')
console.log(url.replace('%20', '-'))

/*
* In URLs, spaces are not allowed, so they must be encoded.
 The two common encodings for space (" ") are:
%20 → Standard encoding (most commonly used)
+ → Used in query parameters (e.g., q=hello+world)
Why does it happen?

!URLs must follow RFC 3986, which defines allowed characters. Spaces are not allowed, so they are encoded to ensure compatibility.
Example:
*const url = "https://example.com/search?q=hello world";
*const encodedUrl = encodeURI(url);
*console.log(encodedUrl); 
Output: "https://example.com/search?q=hello%20world"
*/

console.log(url.includes('sundar')) //true or false

//creating an array of substrings
console.log(gameName.split('-'));