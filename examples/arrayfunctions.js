//let arr1 = [1,1,2,3,1,7,5,7,4,6,4,3,2,1,7,8,6,5,7,0,3,2,1,3,5,7,8,9,75,42,2,4,6,8,2,1234,45,6];

//let arr2 = [7,5,4,4,1,2,7,5,2,5,8,9,5,6,7,8,6,5,7,0,3,2,1,3,5,7,3,4,75,42,2,4,6,8,2,1234,45,6]

let arr1 = [1,2,3,4,5,6, 7,8,9];

function removeEvenno(arr) {
    let isEven = false
    for(let i = 0 ; i < arr.length; i++) {
        if(arr[i]%2 == 0){
            arr.splice(i,1)
        }
        else{
         continue;
        }
    }
    return arr
}

function removeEvenno1(arr) {

    arr.filter((e,i,arr)=>{
        if(e%2==0) arr.splice(i,1)
    })
    return arr
}
// console.log(removeEvenno(arr1));
console.log(removeEvenno1(arr1));
let arr2 = [1,2,3];

function addInfirstAndaddFive(arr){
    arr.unshift(4)
    //console.log(arr, "before add");
    let arr2= arr.filter(e=> (e==4)).map(e=> { return e+5;});
    console.log(arr, "after add",arr2);
     return [...arr2, ...arr];
}
console.log(addInfirstAndaddFive(arr2))

const oldCart = [
                    {apple: 7},
                    {orange: 10}
                ];
const newCart = [
        {apple: 6},
        {papaya: 2}
    ] ;




 function mergeArrayObjects(arr1,arr2){
    let start = 0;
    let merge = [];
  
    while(start < arr1.length){
      if(arr1[start].id === arr2[start].id){
           //pushing the merged objects into array
         
          merge.push({...arr1[start],...arr2[start]})
      }
      //incrementing start value
      start = start+1
    }
    return merge;
  }
  console.log(mergeArrayObjects(oldCart, newCart))

  function mergeArrayObjects(arr1,arr2){
    return arr1.map((item,i)=>{
       if(item.id=== arr2[i].id){
           //merging two objects
         return Object.assign({},item,arr2[i])
       }
    })
  }
  
  console.log(mergeArrayObjects(oldCart, newCart));