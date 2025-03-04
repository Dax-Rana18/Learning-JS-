const accountId=1234 //constant keywords
let accountEmail="dax@gdu.com" //variable :scope used

var accountPassword="1234" //we dont use anymore,because of block scope and functional scope and :scope of variable: { }
// now it works on scope
let accountSpace;
// accountId=2
accountEmail="feg@bj.com"
accountPassword="12121"
accountCity="bengaluru";

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountSpace])