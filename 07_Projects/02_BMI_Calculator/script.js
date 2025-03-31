const form=document.querySelector('form')
// const height=parseInt(document.querySelector('#height').value)
//* this use case will give you empty value 


 //form is eitehr submitted by get or post , 
 //event methd to sytop posting on server we add event listenenr 
 //fucntion callback :revise fucntions 
 form.addEventListener('submit',function(e){
   e.preventDefault() //dont submit
   const height=parseInt(document.querySelector('#height').value)
   const weight=parseInt(document.querySelector('#weight').value)
   //why taken inside and not outside the event listener ??
   const results=document.querySelector('#results')

   //checks : in innerHtml
   if(height==='' || height<0 || isNaN(height)){// convertible to number:true or false){
    results.innerHTML=`Plese give a valid height: ${height}`;
   }
   else if(weight==='' || weight<0 || isNaN(weight)){// convertible to number:true or false){
    results.innerHTML=`Plese give a valid weight: ${weight}`;
   }
   else{
     const bmi=(weight/((height*height)/10000)).toFixed(2)
     //show the result 
     results.innerHTML=`<span>${bmi}</span>`
     if(bmi<18.6){
      results.innerHTML=`<span>${bmi}</span>under weight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
      results.innerHTML=`<span>${bmi}</span> normal range`
    }
    else{
      results.innerHTML=`<span>${bmi}</span> overweight`;
       }
   }
     /*based on this range : Under Weight = Less than 18.6
   
Normal Range = 18.6 and 24.9

Overweight = Greater than 24.9 print innerHTML */
// if(bmi<18.6){
//   results.innerHTML=`under weight`;
// }
// else if(bmi>=18.6 && bmi<=24.9){
//   results.innerHTML=`normal range`
// }
// else{
//   results.innerHTML=`overweight`;
//    }
 })