// A function that returns a random HEX color e.i #123Asd
const HexAlapha  = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const HexPrefix = "#";
const HexLength = 6;

function createHexNumber(HaxAlapha, HaxPrefix,HaxLength){
    let randomHex = "";
    for(let i; i< HexLength; i++){
        const index = Math.floor(Math.random*HexAlapha.length);
        randomHex +=HexAlapha[index];
    }

    return HexPrefix+randomHex;

} 

// promise Example 


function fundelayPromises(delay,status) {
   return new Promise((resolve, reject) => {
           setTimeout(()=>{
                status ?  resolve()  :  reject(  new Error("Whoops!"))},delay);
            

    }).then(()=>console.log("shambhu1"))
    .catch(error => console.log(error))
 
}

fundelayPromises(1000,false);
typescript

const delayPromises = (delay,status) => new Promise((resolve,reject)=>
setTimeout(()=> status ? resolve() : reject(status), delay)
)

delayPromises(5000,false)
.then(() => console.log("hello "))
.catch(status=>console.log(status));

// Async Await Example;

// async function asyncdelayPromises(delay,status){
//     await delayPromises(delay,status)

    
// }
// asyncdelayPromises(2000,true)