// remove duplicate from array ..
const arrOfNum = [1, 2, 2, 4, 5, 5,6, 6,6,6];
function  getUniqueValues(arrOfNum) {
   //let narr= arrOfNum.filter((e,i,arr)=> arr.indexOf(i) == arr.lastIndexOf(i)) // will check it in pair
   let narr = arrOfNum.filter((e,i,arr) =>  arr.indexOf(e) === i) // value of arr.indexOf(e) ie.. 0,1,1,3,4,4,6,6,6,6 and  index would be 0,1,2,3,4,5,6,7,8,9 ..
 // let narr = [...new Set(arrOfNum)]
//  let narr = [];
//         for(i=0; i < arrOfNum.length; i++){ 
//             if(narr.indexOf(arrOfNum[i]) === -1) { 
//                 narr.push(arrOfNum[i]); 
//             } 
//         }
      
    return narr;
}


console.log(getUniqueValues(arrOfNum));