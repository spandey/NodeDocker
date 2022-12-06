//named function  function declaration
function name(firstName) {
    console.log('Hello ' + firstName);
 }
 
name('Jenny');
 
//anonymous function or function expression
const name = function(firstName) {
  return 'Hello ' + firstName ;
  }
 console.log(name('Jenny')); 

 // arrow funtion Exaple

 //Function expression
const addNumber= function(number1, number2) {
    return number1 + number2;
 };
 
 //Arrow function expression
 const addNumbers = (number1, number2) => number1 + number2;