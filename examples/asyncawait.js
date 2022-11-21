// Againg taking promise example
// promise example 1 // requierd out put == sum of array after given time line according flag
let arrtemp =[1,2,3,4,5,6,7]
let arrtemp1 =[1,2,3,4,5,6,7,8,9,]
let arrtemp2 =[1,2,3,4,5,6,7,8,9,10]
// A comman function for async await
function promiseTest(status, delay, arr){


    return new Promise((resolve, reject)=> {
    
            
           setTimeout( () => {
            let total  = arr.reduce((acc,cur)=>  acc+cur, 0) ;
            (status) ? resolve(total):reject(new Error("please set flag"))

           }, delay)
           
           }) 
 

} 

// async function

async function testasyncawait(){

   
   let p2 =   await  promiseTest(true, 1500,arrtemp1);
   console.log(p2)
   let p3 =   await promiseTest(true, 2500,arrtemp2);
   console.log(p3)
   let p1 =   await promiseTest(true, 500,arrtemp);
   console.log(p1);

}

testasyncawait();

// prev example like promise chain