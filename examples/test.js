// const { string } = require("joi")

// Create the function that takes a string as an argument to return the most frequent 
// character (string [azAZ] not a number) of a stringconst 
// example1 = abcddefda1111133333333

 let str = "abcddefda1111133333333";
function getMostRepeatedCharacter(string) {
  let x = string.split(''); 
  let max  =0 
  let maxChar =0;
  let charcount ={}
  let cc = {}
 for(let v of x) {
 // console.log(Number(v),"---")

if( !Number(v)) {
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
  //console.log(char, charcount[char])
  if (charcount[char] > max) {
    max = charcount[char];
    maxChar = char+" :"+ charcount[char];
  }
}

return maxChar;
}


console.log(getMostRepeatedCharacter(str));