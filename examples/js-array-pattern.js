const express = require("express");
const app = express();

app.get('/p1', (req,res,next)=>{
    let str = 0;
    for(let i = 1 ; i < 6 ;i++) {
        for (let j = 1; j <= i ; j++){
            str += j;
            
           // console.log(`${j}`)
        }
        str +=`<br>`;
      //  console.log(`\n`)
    }

res.status(200).send(`${str}`)

})

app.get('/p3', (req,res,next)=>{
    var str = 0;
    for(let i = 6 ; i > 0 ;i--) {
        for (let j = 1; j <=i ; j++){
            str += j;
            
        }
        str +=`<br>`;
    }
    str +=`<br>`;
    for(let i = 1 ; i < 6 ;i++) {
        for (let j = 1; j <= i ; j++){
            str += j;
         }
        str +=`<br>`;
    }
  

res.status(200).send(`${str}`)

})
app.get('/p3', (req,res,next)=>{
    let str = 0;

    for(let i = 1 ; i < 6 ;i++) {
        for (let j = 1; j <= i ; j++){
            str += j;
            
           // console.log(`${j}`)
        }
        str +=`<br>`;
      //  console.log(`\n`)
    }
    for(let i = 6 ; i >= 0 ;i--) {
        for (let j = 1; j <=i ; j++){
            str += j;
            
        }
        str +=`<br>`;
      //  console.log(`\n`)
    }

res.status(200).send(`${str}`)

})
app.listen(2001,()=>console.log("localhost rniing on 2001"))


// function patternOne(){
//     let str = 0;
//     for(let i = 1 ; i < 6 ;i++) {
//         for (let j = 1; j <= i ; j++){
//             str += j;
            
//            // console.log(`${j}`)
//         }
//         str +=`\n`;
//       //  console.log(`\n`)
//     }
//     console.log(`${str}`)
// }
// patternOne();

const test = ()=>{
    let str1 = 0;
    let str2 = 0;
   // console.log(str);
    for(let i = 6 ; i >= 0 ;i--) {
        for (let j = 1; j <=i ; j++){
           // console.log("--"+str1);
            str1 += j;
            
        }
       str1 +=`\n`;
    }
 //   str +=`\n`;
    for(let i = 1 ; i < 6 ;i++) {
        for (let j = 1; j <= i ; j++){
           // console.log("-cddd-"+str2);
            str2 += j;
         }
         str2 +=`\n`;
    }
    return ( ` ${str1}\n${str2}`);
}

console.log(test());