/**
 * Write a JavaScript program to create a string using the middle three characters of a given string of odd length. 
 * The string length must be greater or equal to three.
 */
let createMidleString = (str)=> {
    let len = str.length;
    if(len >= 3){
        if(len%2 != 0) {
    
            let midIndex = Math.floor(len/2)+1;
            console.log(midIndex)
            return str.slice(midIndex-2, midIndex+1
                )
    
        }
     
    
    }
    return
        
    }
    
    console.log(createMidleString("abcdeghij"))


    /**
     * Write a JavaScript program to compute the sum of all digits that occur in a given string.
     * 
     */

let sum_digits_from_string = (str)=>{

    let result = str.split("").reduce((acc, cur)=>{

      

          return  (Number(cur))?   acc+ +cur : acc+0
           
        

    },0)

 return result

}

console.log(sum_digits_from_string("a23sdsdsd4bcd12efg9"))
console.log(sum_digits_from_string("w3resourcff334e"))