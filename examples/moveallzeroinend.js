

const arr = [0, 1, 0, 1, 1, 1, 0, 0]
function setzeroinend(arr){

    for(let i=0;i< arr.length; i++){
        if(arr[i] == 0){
           arr.splice(i,1)
            arr.push(0)
        }
       
    }
    return arr;
}
console.log(setzeroinend(arr)); // using splice for remove zero

const arr2 = [1,2,0,3,5,8,0,0,55,6,5];

function otherExample(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[count++] = arr[i]
        }
       
    }
    while(count < arr.length){
        arr[count++] = 0;  
    }
    return arr;
}
console.log(otherExample(arr2)); 

const arr1 = [1,2,3];

// pop() - remove last elemet form arr and create a new array;
console.log(arr1.pop());
console.log(arr1);

// shift() is opposite of pop will remove from starting abd create new array with revomed data
console.log(arr1.shift())
console.log(arr1);

// unshift will add some data in starting it is opposite of push()
console.log(arr1.unshift(1,3))
console.log(arr1);
