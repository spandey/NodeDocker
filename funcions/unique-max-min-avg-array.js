let arr = [10,45,43,43,10,5,1,2,3,4,4,6,45,1,2,7,8,9,9];
let newarr2 = [10,45,43,10,5,1,2,3,4,4,6,,1,2,7,8,9];
function uniqueInSortedArray(arr) {
    const sortedArray  = arr.sort((a,b)=> a-b)
    //console.log(sortedArray);
    let uniqueArray = sortedArray.filter((e,i,arr)=> arr.indexOf(e) === i) // removed all duplicated

    let uniqueArrayOnlyRepeted = sortedArray.filter((e,i,arr)=> arr.indexOf(e) !== i) // retunned only duplicated value
    console.log(`unique Array ${uniqueArray}`)
    console.log(`unique Array only duplicated ${uniqueArrayOnlyRepeted}`)

}
uniqueInSortedArray(arr);

function findMaxValue(arr) {
    let max = -Infinity;
    for(let value of arr)
    {
        if(max < value){
            max = value;
        }
        else continue
    }
        
    console.log(`max value in array ${max}`)

}


findMaxValue(arr);

function findMinValue(arr){
    let min = Infinity;
    for(let value of arr)
    {
        if(min > value){
            min = value;
        }
        else continue
    }
        
    console.log(`max value in array ${min}`)

}
findMinValue(arr)

function findAvgValue(arr){
   
    let avg = arr.reduce((acc,cur)=> { return acc + cur},0 ) / arr.length; // use Math.floor() for result without decimal or Math.ceil() for round of number
    
    console.log(`max value in array ${avg}`)

}
findAvgValue(arr)


// sort array without original change
function sortArraywithooutChangeOriginal(arr){
    let newarr= arr.slice(0, arr.length).sort((a,b) => a-b); 
    console.log(`arr value ${arr} and sorted array ${newarr}`)
}

sortArraywithooutChangeOriginal(newarr2)

function sortandReverseArraywithooutChangeOriginal(arr){
    let newarr= arr.slice(0, arr.length).sort((a,b) => a-b); 
    let revesearray = newarr.slice().reverse();
    console.log(`arr value ${arr} and sorted array ${newarr} and reversed ${revesearray}`)
}

sortandReverseArraywithooutChangeOriginal(newarr2)

function emptyArrTrick(arr){
    // copy the array according to trick
    // Trick1 
    let arr1  = arr;
    arr = [];
    console.log(` arr1 ${arr1} and  arr ${arr}`)
    //trick2 
    let arr2 = arr1;
    arr1.length = 0;
    console.log(` arr2 ${arr2} and arr1 ${arr1}`)
    // trick3 
    let arr3 =arr2;
    arr2.splice(0,arr2.length);
    console.log(` arr3 ${arr3} and arr2 ${arr2}`)
    // trick 4 The fourth way to empty an array is to remove each element of the array one by one using the while loop and pop() method:

        while(arr3.length > 0) {
            arr3.pop();
        }
        console.log(` arr3 ${arr3} and original ${arr}`)

}
emptyArrTrick(arr);
/*Note : Slice Vs Splice

The slice() method can be used to create a copy of an array or return a portion of an array. 
It is important to note that the slice() method does not alter the original array but instead creates a shallow copy.

Ex. var array=[1,2,3,4,5];
console.log(array.splice(2));
This will return [3,4,5]. The original array is affected resulting in array being [1,2]



the splice() method will change the contents of the original array.
The splice() method is used to add or remove elements of an existing array and the return value will be the removed items from the array.

If nothing was removed from the array, then the return value will just be an empty array.

Ex. var array=[1,2,3,4,5]
console.log(array.slice(2));
This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].
*/