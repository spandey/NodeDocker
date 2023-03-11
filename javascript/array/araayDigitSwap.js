/**
 * Write a JavaScript program to swap two halves of a given array of integers of even length.
 * 
 */
function swapAdjacentHalveDigits(arr) {
    let temp =0
    console.log(arr.length)

    for(let i = 0 ; i < arr.length/2; i++){
        temp = arr[i];
        arr[i] = arr[i+arr.length/2];
        arr[i+arr.length/2] = temp;
    }

    return arr;

    }
  
  console.log(swapAdjacentHalveDigits([1,2,3,4,5,6,76,7]));


  /**
   * 
   * 
   */
  function swapDigitsInArray(arr) {
    let temp =0
    console.log(arr.length)

    for(let i = 0 ; i < arr.length; i++){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        i++;
    }

    return arr;

    }
  
  console.log(swap_adjacent_digits([1,2,3,4,5,6]));