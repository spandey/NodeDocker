// double the value of array
let arrayOfNumbers = [1,2,3,4]
const newarrayOfNumbers = arrayOfNumbers.reduce((cur,next, index, arr)=> {
    
    arr[index] = arr[index]*2; 
    return arr; // not required if want to update original one

}, 0)

console.log(newarrayOfNumbers)

//// remove duplicate from array ..
const arrOfNum = [1, 2, 2, 4, 5, 5,6, 6,6,6];
function  getUniqueValues(arrOfNum) {
let narr = arrOfNum.reduce((prev,cur)=>{
    if (!prev.includes(cur)) 
     prev.push(cur) 
     return prev;

 },[])
 return narr;
}


console.log(getUniqueValues(arrOfNum));

// every word count of str;

let strings = "i am shambhu shambhu i am very happy than any of any one then i"
function wordcount(str){

    return str.split(" ").reduce((obj,char)=>{
        (obj[char]) ? obj[char]++ : obj[char] = 1;
        return obj;

    },{})

}

console.log(wordcount(strings))

// find max word count in string's character 
let strings1 = "i am shambhu shambhu i am very happy than any of any one then i"
function wordcountmax(str){

    return str.split(" ").reduce((obj,char)=>{
        console.log(char)
      let len = str.split(char).length -1;
     return (len > obj[1]) ? [char,len]: obj

    },["", 0])

}

console.log(wordcountmax(strings1))