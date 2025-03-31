//you can use both ways to retrieve data
const clock =document.getElementById('clock');
// const clock =document.querySelector('#clock');

// for nornmal not dynamixcally chaging clock 
let date=new Date();
console.log(date.toLocaleString());

//but i want to control dynamically changing use: 
setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleString()); i dont want to run in console but update in html so :
  clock.innerHTML=date.toLocaleTimeString();
},1000);
