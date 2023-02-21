let arr1 = [2,88,5,33,90]
let arr2 = [22,33,44,5,33,88]
let mergedArray = arr1.concat(arr2.filter(e=> !arr1.includes(e)));
console.log(mergedArray)

let ma1 = arr1.concat(arr2.filter(e=> !arr1.find(e1=> e1 == e)))
console.log(ma1)
let arr3 = [...arr1, ...arr2];
//const sortedArray  = arr3.sort((a,b)=> a-b)
let newarr = arr3.filter((e,i,ar)=> ar.indexOf(e) === i);
console.log(newarr);

function mergeArra(a,b) {
  // 1
  let c = a.concat(b.filter(item=> !a.find(e=>e==item)))
 return c


// 2
  // for(let i =0; i < b.length; i++){
  //   if(a.indexOf(b[i]) == -1){
  //     a.push(b[i])
  //   }
   
  // }
  // return a

  

  //3
//   let c = [...a, ...b];
//   let d = [];
//  for(let i =0; i < c.length; i++){
//     if(!d.includes(c[i])){
//       d.push(c[i])
//     }
   
//   }
//   return d

// 4
// let c = a.concat(b.filter(item=> !a.includes(item))) ;
//  return c


let merged1Array = b.filter(e=> !a.includes(e)).map(e2=>e2);
console.log(merged1Array);
return ([...ar1,...merged1Array]);


}
console.log(mergeArra(arr1,arr2))