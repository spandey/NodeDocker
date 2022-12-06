/*
Call :- Call is a function that helps you change the context of the invoking function. 
In layperson's terms,    it helps you replace the value of this inside a function with whatever value you want.
Ex.. func.call(thisObj, args1, args2, ...)
*/

const employee = {
    'firstName': "Shambhu",
    'lastName': 'pandey',
    'age':"42",
    greting:function(str1,str2){
        console.log(`${str1} ${this.firstName} ${this.lastName} ${str2}`)
    }
}

//normal function call 
employee.greting("hi", "welcome"); // output - hi Shambhu pandey welcome

// calling By Call function;
let  person1 = {
    'firstName': "Atharv",
    'lastName': 'pandey'
}
employee.greting.call(person1, "hi", "welcome") // output - hi Atharv pandey welcome
//employee.greting(person1, "hi", "welcome") // output- [object Object] Shambhu pandey hi




/*
apply()- The Apply function is very similar to the Call function. The only difference between call and apply is the difference in how arguments are passed.

In apply, arguments you can pass an argument as an array literal or a new array object.

    func.apply(thisObj, argumentsArray);

    As per above example...

*/
let arg = ["hi", "welcome"];
employee.greting.apply(person1, arg) // output - hi Atharv pandey welcome


/*
bind() - The bind function creates a copy of a function with a new value to the this present inside the calling function.

Here is the syntax for the bind function:
*/

let  person2 = {
    'firstName': "Amit",
    'lastName': 'Maheshwari'
}
let p1greting = employee.greting.bind(person1) 
let p2greting = employee.greting.bind(person2) 
 p1greting("hi","welcome");
 p2greting("hello","welcome")



 