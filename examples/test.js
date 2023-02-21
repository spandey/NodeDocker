// const { string } = require("joi")

// Create the function that takes a string as an argument to return the most frequent 
// character (string [azAZ] not a number) of a stringconst 
// example1 = abcddefda1111133333333

 let str = "abcddefda1111133333333";
function getMostRepeatedCharacter(string) {
    // return string.split('').reduce((acc,char)=>{
    //     let len = string.split(char).length - 1;
    //     return len > acc[1] ? [char,len] : acc
    // },['',0])[0]
    let max  =0 
    let maxChar =0;
    let charcount ={}
    let x = string.split(''); 
    let stA = []
for(let v of x) {
   // console.log(Number(v),"---")

 if( !Number(v)) {
    stA.push(v);
    if(charcount[v]){
        charcount[v]++;
    }
    else {
        charcount[v]= 1;
    }

 }
 
 else
 continue;
}
for (let char in charcount) {
    if (charcount[char] > max) {
      max = charcount[char];
      maxChar = char;
    }
  }

  return maxChar;
}


console.log(getMostRepeatedCharacter(str));