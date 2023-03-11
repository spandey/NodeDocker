

let str = "Write a JavaScript program to capitalize the first letter of each word of a given string."
let capsFirstAlpha = (str)=>{
   let newText =  str.split(" ").map((e,i,arr)=>{
    return arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);

   });
//    for(let i = 0; i < newText.length; i++){
//     newText[i] = newText[i][0].toUpperCase() + newText[i].slice(1);
//    }
return newText.join(" ");;
}

console.log(capsFirstAlpha(str));