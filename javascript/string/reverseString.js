/**
 * Write a JavaScript program to reverse a given string.
 * 
 */
let str = "abshdudofffghj"
let reverse = (str)=> {
    return str.split("").reverse().join("");

}
console.log(reverse(str))

//
let reverse1 = (str)=> {
    let arr =  str.split("");
    console.log(arr.length -1 )
    let newStrinh = [];
    for(let j = arr.length -1 ; j >= 0; j-- ) {
        newStrinh.push(arr[j]); 
    }
   return newStrinh.join("");
}
console.log(reverse1(str))