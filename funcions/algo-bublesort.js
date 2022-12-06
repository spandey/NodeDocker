// 1. Starting with the first element, compare the current element with the next element of the array.

// 2. If the current element is greater than the next element of the array, swap them.

// 3. If the current element is less than the next element, just move to the next element.

// 4. Start again from Step 1.
var arr = [234, 43,547, 55, 63,  5, 100,1,12233,6, 235];
function bbsort(arr){
   
    for(let i = 0 ; i < arr.length; i++){
        let isswapped = false;
        for( let j = 0 ; j < arr.length-1; j++){ // j will run length -1 bcoz last element already has been sorted
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1]=temp;
                isswapped = true;
            }
           
        }
        if(!isswapped){
            break;
          }
    }
   // if(isswapped)
    console.log(arr);

}
bbsort(arr)