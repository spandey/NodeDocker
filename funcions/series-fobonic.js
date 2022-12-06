// Steps to find the Fibonacci series of n numbers
// Following are the steps to find the series of the Fibonacci Series:

// Step 1: Declare the variables first, second, next and number

// Step 2: Initialize the local variable first = 0, second = 1, next = 0

// Step 3: Read a number from the user

// Step 4: Display the value of first

// Step 5: Repeat the process of Fibonacci series until i > n

function printFabonicSeries(num) {
    let first = 0; 
    let second = 1; 
    let next = 0;
    for(let i = 0; i < num ; i++){
        console.log(`${first}`)
        
        next = first+second;
        first = second;
        second = next;
    

    }
}
printFabonicSeries(10);