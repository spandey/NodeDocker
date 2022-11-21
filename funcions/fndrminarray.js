//find Array duplicate
let arr = [1,2,3,4,4,6,5,1,2,7,8,9,9];
function findDuplicate(arr){
let newArray = arr.filter((e,i,arr)=> (arr.indexOf(e) != i));
console.log(newArray);
}
findDuplicate(arr);

function removerepeted(arr){
    let newArray = arr.filter((e,i,arr)=> (arr.indexOf(e) === i));
    console.log(newArray);
}


removerepeted(arr)

// Other Examples
let test = (str) =>{
    let rstr= [];
 
     for(let j =0 ; j <str.length ;j++ ){
          let match = false
        for(let i =0 ; i < rstr.length ;i++ ){
            if( rstr[i] === str[j]){
                match = true;
                break;
            }
       }
       if(!match){
           rstr.push(str[j])
       }
   }
   return rstr
}
function test1(arr){
    let result =[];
    for(let i = 0; i <arr.length; i++)
    {
        if(result.indexOf(arr[i]) === -1){
            result.push(arr[i])
        }
    }
    return result;
}
test2 = (arr)=>{
     let result =[];
    for (let value of arr){
        if(result.includes(value)){
            continue;
        }
        result.push(value);
       
    }
    return result.join(" ");
       
    }
     
var colors = ["red","red","green","green","green", "black"];
console.log(test(arr))
console.log(test(colors))

console.log(test1(arr))
console.log(test1(colors))

console.log(test2(arr))
console.log(test2(colors))

findDuplicate(colors);
removerepeted(colors)
