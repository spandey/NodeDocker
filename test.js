//const app = require('./app');

/*function test(){
  console.log(a);
  console.log(b);
 let a = "dd";
 var b ="dd";
  

} */
/*
var i = 0;
function foo(){
  i++;
  if(i>20){
    return;
  }
  console.log("foo", i);
  setTimeout(()=>{
    console.log("setTimeout", i);
  },0);
  //process.nextTick(foo);
}

setTimeout(foo, 2);
setTimeout(()=>{
  console.log("Other setTimeout");
},2);
*/
/*
let NO_OF_CHARS = 256;
      
    /* Print duplicates present in
    the passed string 
    function printDups(str)
    {
          
        // Create an array of size 256 and
        // fill count of every character in it
        let count = new Array(NO_OF_CHARS);
        count.fill(0);
          
        for (let i = 0; i < str.length; i++)
            count[str[i].charCodeAt()]++;
             
        for (let i = 0; i < NO_OF_CHARS; i++)
        {
            if(count[i] > 1)
            {
                document.write(String.fromCharCode(i) + ", " +
                "count = " + count[i] + "</br>");
            }
        }    
    }
     
    let str = "test string";
      printDups(str);
*/
/*setTimeout(() => {
    console.log('setTimeout');
}, 0);
setImmediate(() => {
  console.log('setImmediate');
});*/
// var fs = require('fs');
// fs.readFile("my-file-path.txt", function() {
//     setTimeout(function(){
//         console.log("SETTIMEOUT");
//     });
//     setImmediate(function(){
//         console.log("SETIMMEDIATE");
//     });
// });
/*setTimeout(function() {
    console.log("TIMEOUT 1");
    setImmediate(function() {
        console.log("SETIMMEDIATE 1");
    });
}, 0);
setTimeout(function() {
    console.log("TIMEOUT 2");
    setImmediate(function() {
        console.log("SETIMMEDIATE 2");
    });
}, 0);
setTimeout(function() {
    console.log("TIMEOUT 3");
}, 0);*/
/*
let racer1 = function() {
    setTimeout(() => console.log("timeout1"), 0);
    setImmediate(() => console.log("immediate1"));
    process.nextTick(() => console.log("nextTick1"));
  }
  let racer2 = function() {
    process.nextTick(() => console.log("nextTick2"));
    setTimeout(() => console.log("timeou2t"), 0);
    setImmediate(() => console.log("immediate2"));
  }
  let racer3 = function() {
    setImmediate(() => console.log("immediate"));
    process.nextTick(() => console.log("nextTick"));
    setTimeout(() => console.log("timeout"), 0);
  }
  racer1()
  racer2()
  racer3()
  */
  /* 1. 
  const http  = require('http');

  const server = http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();

    
  }).listen('4040');*/
/* 2. 

  for (var i = 0 ; i <= 3 ; i++){
    const x = (i)=>console.log(i);    
    console.log(x(i));
  }
 
  setTimeout(()=>console.log("set time out ", i), 1000);
  */
  
 // find  word count in string 
 /*let string = "welcome1 welcome1 test for agaon welcome1 agaon" ;

 let words = {};
  let stringToArray = string.split(" ");
  for (let word of stringToArray) {
    if(!words[word]) {
      words[word] = 1;
    }
    else {
      words[word]++;
    }
  }
console.log(words); */
// duplicate word 
/*let st = "welcome1 welcome1 test for agaon welcome1 agaon" ;

let string = st.toLowerCase();
 
  let stringToArray = string.split(" ");
  for (let i = 0 ; i <  stringToArray.length ; i++) {
    let count = 1;
    for (let j = i+1 ; j < stringToArray.length ; j++) {
      if (stringToArray[i] == stringToArray[j]){
        count++;
        stringToArray[j] = "0";
      }

    }

    if(count > 1 && stringToArray[i] != "0")
    {
      console.log(stringToArray);
    }
  }*/
  // word count
  /*let words = "I am not gonna live shambhu  but shambhu wanna live while I am alive";

function countRepeatedWords(sentence) {
  let words = sentence.split(" ");
  let wordMap = {};

  for (let i = 0; i < words.length; i++) {
    let currentWordCount = wordMap[words[i]];
    let count = currentWordCount ? currentWordCount : 0;
    wordMap[words[i]] = count + 1;
  }
  return wordMap;
}

console.log(countRepeatedWords(words)); */
 /* let checkWords = "I am not gonna live forever, but I wanna live while I am alive"

const newStr = checkWords.split(' ').reduce((acc,rec) => {
  return ({ ...acc, [rec]: (acc[rec] || 0) + 1 })
},{})
console.log(newStr);*/
// duplicate word
/*const str = "big black shambhu bug bit a big black shambhu dog on his big black nose";
const findDuplicateWords = str => {
   const strArr = str.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
    console.log ( strArr[i] ," -", strArr.indexOf(strArr[i]) + " and  { " + strArr.lastIndexOf(strArr[i]))

      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
        // console.log ( strArr[i] ," -", strArr.indexOf(strArr[i]) + " and  { " + strArr.lastIndexOf(strArr[i]))
        if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(findDuplicateWords(str));*/

// duplicate in array
/*const duplicateArr = [1,1,6,4, 3 ,4,5,6,8]
const newArray = duplicateArr.filter((ele, index, arr)=> arr.indexOf(ele) != index);
console.log(newArray);
*/
/*
const strArr = "bigblack1bigblack1";
const findDuplicateWords = str => {
   //const strArr = str.split(" ");
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
        if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
    return result.join(" ");
}

   return res.join(" ");
};
console.log(findDuplicateWords(strArr));
*/

//remove duplicate form array
const arr =[1,1,5,3,3,1,4,5]
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

const str = "big black shambhu bug bit a big black shambhu dog on his big black nose";

let strArr = str.split(" ");
// find word count
function test4(arr){
    let result = {};
    for(let value of arr){
        if(result[value]) {
            result[value]++;
        }
        else result[value] = 1
    }
    return result;
}
console.log(test4(strArr));
// find repeated word
function test5(arr){
    let result = [];
    for (let i = 0 ; i <  arr.length ; i++) {
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
         if(!result.includes(arr[i])){
            result.push(arr[i]);
         };
      };
    }
    return result.join(" ");
}

console.log(test5(strArr));
// palindram string
let str2 = "levelslevel"

function test6(str) {
    let result = "palindram falsy"
    for(let i = 0 ; i< str.length; i++){
         for(let j = str.length-1 ; j>= 0; j--){
             if(str[i]=== str[j]) result = "palindram truthy"
             else result = "palindram falsy"
         }
    }
    return result
}
function test7(str) {
    let result = "palindram falsy"
   let strreverse = str.split('').reverse().join('')
             if(strreverse === str) result = "palindram truthy"
             else result = "palindram falsy"
      
    
    return result
}
console.log(test7(str2));
console.log(test6(str2));
// min value in array
let array1 = [10,58,6,5,410,20,1,48];
function test7(arr){
    let min = 0;
    for(let i = 0; i< arr.length; i++){
         //console.log(arr[i], min)
         let temV = arr[i]
        // console.warn(temV, min)
         if(min ==0){
            min = temV  
         }
        else if(min > temV){
             min = temV
          //   console.log(min)
        }
        else {
        continue;
        }
    }
    return min;
}
console.log(test7(array1))

// min max sum of array 4 of 5
function miniMaxSum(arr) {
  // Write your code here

  let newArr = arr.sort((a, b) => a - b);
  let maxSet = newArr.slice(1);
  let minSet = newArr.slice(0, -1);

  //console.log(minSet, maxSet);

  // to get just the max/min value
  const sum = newArr.reduce((a, total) => a + total, 0);
  console.log(sum - newArr[newArr.length - 1],sum - newArr[0]);

  function changeFormate(s){
    //let newFormate = timestart
    let [hours, minutes,secWithModifire] = s.split(':');
    let sec = secWithModifire.slice(0, 2);
    let modifire = secWithModifire.slice(2);
    if (modifire == "PM" && hours < 12) hours = parseInt(hours) + 12;
    if (modifire == "AM" && hours == 12) hours = (parseInt(hours) - 12 == 0)? "00": parseInt(hours) - 12;
        let timeend = hours + ":" + minutes + ":"+sec;
        console.log(timeend); //h:i:s
    }
    changeFormate('12:40:22AM')

}

let arrMatrix= [ [ 11, 2, 4], [ 4, 5, 6 ],
                    [ 10, 8,-12]];
                    
function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let ltr = 0;
    let rtl = 0;
    
    for(let i =0 ; i<n; i++){
       for(let j =0 ; j<n; j++){
           if(i==j){
              ltr += parseInt(arr[i][j]);
           }
           if((i+j) == n -1){
               rtl += parseInt(arr[i][j]);
              }
       }
    }
    
    let diffrence = parseInt(Math.abs(ltr - rtl));
   
    return diffrence;
}
console.log(diagonalDifference(arrMatrix))
// counting index sorting;
let contingArr = "63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33";
                    
function countingIndexData(input) {
    let arr = input.split(" ");
   let  len = arr.length;  
    //console.log(Array.apply([1,2,3],new Array(5)).map(function() {return 0;}))

  
    
    let newArray = Array.apply(null, new Array(100)).map(Number.prototype.valueOf, 0);
let newArray1 = Array(100).fill(0)

    for (var i=0; i<len; i++) {
        newArray[parseInt(arr[i], 10)]++;
          newArray1[parseInt(arr[i], 10)]++;
    }
console.log(newArray.join(" "))
console.log(newArray1.join(" "))
}
  

  countingIndexData(contingArr)

  //zig zag 
  /* 

  //pchedu code ..
//   given: int[] input

// mid = input.Length / 2
// last = input.Length - 1

// //step 1 - sort in increasing order
// sort(input)

// //step 2 - put largest in middle
// swap(input[mid], input[last])

// //step 3 - reverse remaining elements
// left = mid + 1
// right = last - 1

// loop while left < right
// 	swap(input[left], input[right])

// 	left++
// 	right--

// return input
  let arr = [ 7, 2, 5, 4, 3, 6, 1];
                    
function processData(arr) {
    console.log("newArr");
    let newArr = [];
    //let newArr = arr.sort();
    let n = arr.length;
    let mid =(n+1)/2;
    for(let i= mid; i<n ;i++){
        newArr.push(arr[i])
    }
    for(let i =mid-1; i >=0; i--){
         newArr.push(arr[i])
    }
   newArr[mid-1] = arr[mid-1];
   console.log(newArr);
    
}


processData(arr) //output = [ 3, 6, 1, 4, 5, 2, 7 ]

// another way
let input = "1
7
1 2 3 4 5 6 7"
 let newArrayInput= input.replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
     let n = newArrayInput.length;
     let mid =Math.floor(n/2);
     let last = n-1;
     
     let arr = newArrayInput.sort();
     
     let temp1 =arr[mid]
     arr[mid] = arr[last];
     arr[last] = temp1;
     
     let left = mid+1;
      let right = last-1;
     
     while(left < right){
          let temp2 =arr[left];;
          arr[left] = arr[right];
          arr[right] = temp2;
          left++;
          right--
     }
     

let result = arr.toString().split(',').join(" ");
console.log(result);
//output =  1 2 3 7 6 5 4

  */