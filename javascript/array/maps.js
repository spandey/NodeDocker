// How many times true will return // with compare statment map returns true/false in place of values
const array = ["hello", "hello s ", " hello s", "hello s", " hello s "]
function testBoolean(str) {
    const testBoolean = str.map(e => {
    	 return e === "hello s" // 1 time true
        return e.trim() === "hello s" // 4 times true

    })
    return  testBoolean
}


console.log(testBoolean(array))


/**
 * Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
 */
num = [1, 2, 3, 2, 2, 8, 1, 9];

let replaceRepeatedNumber = (arr, num)=>{

   return arr.map((e,i)=>{
    return    e!=2 ? e : e=5 

    })

return 
}

console.log(replaceRepeatedNumber(num,5))
