/**
 * Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.
 */
function max_difference(arr) {
	var max = -1;
    var temp;
	for (var i = 0; i < arr.length - 1; i++)
      {
		temp = Math.abs(arr[i] - arr[i + 1]);
        console.log(temp)
		max = Math.max(max, temp);
        //console.log(max)
	  }
	return max;
}

console.log(max_difference([1, 2, 3, 8, 9]))

/**
 * Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers.
 * 
 */
let arrayMaxDiff = (arr)=>{

    let max = 0
    let temp = 0
    for(let i =0 ; i < arr.length; i++){
       for(let j = 0; j < arr.length; j++ ){
           if(j !=i){
               temp = Math.abs(arr[i]-arr[j]);
               max = Math.max(max,temp)
   
           }
   
       }
   
    }
   
   return max
   
   }
   
   console.log(arrayMaxDiff([1, 2, 3, 8, 9]))
   console.log(arrayMaxDiff([1, 2, 3, 18, 9]))
   console.log(arrayMaxDiff([13, 2, 3, 8, 9]))

   /**
    * Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
    */

   let arraySwapFandL = (arr)=>{

    // by array destructring

   return [arr[0], arr[arr.length-1]] = [arr[arr.length-1],arr[0]] 

}
console.log(arraySwapFandL([1, 2, 3, 4]))