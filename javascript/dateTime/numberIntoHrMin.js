/**
 * Convert a given number to hours and minutes

 */
let convertInHrsMins = (num)=>{

    let hrs = Math.floor(num /60);
    let mins = num%60;
      
    return hrs+ ":" + mins;
     
 }
 
 console.log(convertInHrsMins(160));