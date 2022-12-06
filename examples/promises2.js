// function getPizza() {
//     console.log('I am getting pizza');
// }
 
// function getPizzaAfter10Seconds() {
//     setTimeout(getPizza, 100);
// }
 
function getPizza() {
    return new Promise((resolve, reject) => {
        resolve("I am getting pizza ");
    })
}
function getPizzaAfter10Seconds(cb) {
    return new Promise((resolve, reject)=> {
    
            
                   setTimeout( () => {
                   resolve(cb)
        
                   }, 2000)
                })
                   
                
}
getPizza()
    .then((result) => {
        
        return getPizzaAfter10Seconds(result)
    })
    .then((result) => {
        console.log(result,"____");
    });


let arrtemp =[1,2,3,4,5,6,7]


const sum =  (arr,flag)=> {
    return new Promise((reslove,reject) =>{  
        
      let total=  arr.reduce((acc,cur)=>  acc+cur, 0) 
      if(flag)
      reslove(total);
      reject(new Error("please set sum"))

    }) 

} 

// promise function inside promise
function promiseTest(status, delay, result){

    
    return new Promise((resolve, reject)=> {
    
            
           setTimeout( () => {
            (status) ? resolve(result):reject(new Error("please set flag"))

           }, delay)
           
           }) 
 

} 

sum(arrtemp,true)
    .then((result)=>{

        return promiseTest(true,2000,result)
    })
    .then((x)=> {console.log(x, "here")})
    .catch((err)=>console.log(err))
// promiseTest(true,2000,arrtemp)
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>console.log(err))


