
let array_of_arrays = [[1, 2], [3, 4], [5, 6]];

let flartArray = array_of_arrays.reduce((cur,acc)=> cur.concat(acc));

console.log(flartArray);