let str = "abcddefda1111133333333";
// Create the function that takes a string as an argument to return the most frequent 
// character (string [azAZ] not a number) of a stringconst 

function getMostRepeatedCharacter(string) {
       let newastring = string.split('').filter((e)=> !Number(e)).map( (e)=> e).join('')
    let newarray = newastring.split('').reduce((acc,char)=>{
          let len = newastring.split(char).length-1;
         
          return len > acc[1] ? [char,len] : acc
          


    },["",0]);
   

 return newarray;
}


console.log(getMostRepeatedCharacter(str));