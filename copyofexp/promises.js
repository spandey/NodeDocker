
// promise example 1 // requierd out put == sum of array after given time line according flag
let arrtemp =[1,2,3,4,5,6,7]
let arrtemp1 =[1,2,3,4,5,6,7,8,9,]
let arrtemp2 =[1,2,3,4,5,6,7,8,9,10]
function promiseTest(status, delay, arr){


    return new Promise((resolve, reject)=> {
    
            
           setTimeout( () => {
            let total  = arr.reduce((acc,cur)=>  acc+cur, 0) ;
            (status) ? resolve(total):reject(new Error("please set flag"))

           }, delay)
           
           }) 
 

} 



// Example promise chaing with finaly//  if we need  result of multiply by 20 to sum of array after that need diveded by 2 after that multiply by 3.
promiseTest(true, 500,arrtemp)
.then( (total) => {console.log(total)
         return total*20;
    }
    )
.then((multypl20) => {console.log(multypl20)
    return multypl20/2;
    }
    )
.then((divison2) => {console.log(divison2)
    return divison2*3;
    }
    )
.then((final) => {console.log(final)
    
    }
    )
.catch((status => console.log(status) ))
.finally(()=>console.log("finaly call"))


// promise all  lets do with above example
let promise1 = (status, delay, arr) =>{


    return new Promise((resolve, reject)=> {
    
            
           setTimeout( () => {
            let total  = arr.reduce((acc,cur)=>  acc+cur, 0) ;
            (status) ? resolve(total):reject(new Error("please set flag"))

           }, delay)
           
           }) 
 

} 
let promise2 = (total, multyply) => {
   return new Promise((resolve, reject)=>{

        const result = total*multyply;
        resolve(result)
    })
}
let promise3 = (reult, division) => {
    return new Promise((resolve, reject)=>{
    
            const result2 = reult/division;
            resolve(result2)
        }) 

}
let promise4 = (duble) => {
    return new Promise((resolve, reject)=>{
    
            const result3 = duble*2;
            resolve(result3)
        }) 

}
let allpromises = Promise.all([promise1(true, 500,arrtemp),promise2(29,20),promise3(580,2),promise4(290)])
allpromises.then((data)=>console.log(data)).catch((err)=>console.log(err));

// // all setteled with same Example
let allSetteledpromises = Promise.allSettled([promise1(false, 500,arrtemp),promise2(29,20),promise3(580,2),promise4(290)])
allSetteledpromises.then((data)=>console.log(data)).catch((err)=>console.log(err));

// race with same Example 

let promise5 = (t)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("rece 5"),t)



    })
}

let promise6 = (t)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("rece 6"),t)



    })
}
let racepromice = Promise.race([promise1(false, 3000,arrtemp),promise5(2000),promise6(1000)])
racepromice.then((data)=>console.log(data)).catch((err)=>console.log(err));


let p1 =  promiseTest(true, 5000,arrtemp);
let p2 =  promiseTest(true, 3000,arrtemp1);
let p3 =  promiseTest(true, 2000,arrtemp2);

let pRace = Promise.race([p1,p2,p3])
pRace.then((data)=>{
    console.log("race")
    console.log(data)}).catch((err)=>consol.log(err))


    // promise.resolve("") New Example


    const newpromise = Promise.resolve("hello word");
    newpromise.then((msg) => console.log(msg));


    //promise inside promise

    const promiseininner = ()=>{

        return new Promise((resolve,reject)=> {
           // setTimeout(()=> newpromise.then(val => console.log(val)),6000)
            setTimeout(()=> resolve(newpromise),6000)
        })
    }
    promiseininner()
    .then((mgs)=>console.log(`this is my ${mgs}`))
    .catch((err)=>console.log(err))