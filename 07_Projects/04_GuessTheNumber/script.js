 //1st challene to generate random number 
 let randomNumber = parseInt(Math.random() * 100 + 1);
 //selectors
//  console.log(parseInt(Math.random()*100+1)); //not in decimal but in integer
 const sumbit=document.querySelector('#subt');
 const userInput=document.querySelector('#guessField');
 const guessSlot=document.querySelector('.guesses');
 const remaining=document.querySelector('.lastResult');
 const lowOrHi=document.querySelector('.lowOrHi')
 const startOver=document.querySelector('.resultParas') 

 const p=document.createElement('p');
 let prevGuess=[]
 let numGuesses=1

 let playGame=true;
if(playGame){
  sumbit.addEventListener('click',function(e){
    e.preventDefault()
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}
 //......functions designing 
 function validateGuess(guess){
   //validation of value if between 1 to 100 and not symbol or character
   if(isNaN(guess)){
     alert(`please enter a valid number`)
   }
   else if(guess<1){
    alert(`Please enter a number more than 1`)
   } 
   else if(guess>100){
     alert(`Please enter a number less than 100`)
   }
   else{
     prevGuess.push(guess);
     if(numGuesses==11){
       displayGuess(guess);
       displayMessage(`Game Over,Random Number was: ${randomNumber}`)
       endGame()
     }
     else{
      displayGuess(guess)
      checkGuess(guess)
     }
   }
 }

//.....check guess
function checkGuess(guess){
  if(guess===randomNumber){
    displayMessage(`You guesses it right !!`)
    endGame();
  }
  else if(guess< randomNumber){
    displayMessage(`Number is Too low`);
  }
  else if(guess>randomNumber){
    displayMessage(`Number is TOO high`);
  }
}
//dispaly guess:cleanup method
function displayGuess(guess){
  userInput.value=" ";
  guessSlot.innerHTML+= `${guess} ` //pushing values not updating
  numGuesses++;
  remaining.innerHTML= `${11-numGuesses}` 
}
//...message display or pass quess:sidha interact with DOM
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`
}
function endGame(){
  userInput.value=' ' //empty the value 
  userInput.setAttribute('disabled','') //ye bilkul smjh nhi aaya :key value pair ?
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame">Start new Game</h2>`; 
  startOver.appendChild(p); //ye bhi smjh nhi aaya 
  playGame=false;
  newGame()
}
function newGame(){
//event listener to press button 
const newGameButton=document.querySelector('#newGame');
newGameButton.addEventListener('click',function(e){
  //yaha hme fucntion se kaam nhi hai bs variables reset krne se hai 
  randomNumber=parseInt(Math.random()*100+1);
  prevGuess=[];
  numGuesses=1;
  guessSlot.innerHTML='';
  remaining.innerHTML=`${11-numGuesses}`;
  userInput.removeAttribute('disabled')
  startOver.removeChild(p);
  playGame=true;
})
}