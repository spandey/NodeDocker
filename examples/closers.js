//comman coluser function send current value of counter
function Closure(){
    let count = 0
    return {

        increment(){
           count++;
           
       },
        getCount(){
           return count;
       }
    }
    
}

let myCounter = Closure();
console.log(myCounter.getCount());
myCounter.increment();
console.log(myCounter.getCount());
myCounter.increment();
console.log(myCounter.getCount());

// closer getter setter by module...

const {set,get}= require("./closerGetSet")
console.log(get());
set(55);
console.log(get());
