let arr = [10,45,43,4];
let newarr2 = [11,2,7,8,9];
function uniqueInSortedArray(arr1, arr2) {
    let arr3 = [...arr1, ...arr2]
   
    console.log(`arr1 ${arr1} arr2 ${arr2} combined arrate${arr3}`)

}
uniqueInSortedArray(arr, newarr2);

function insertElementInarrInexistingIndex(arr, index,val){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        if (i == index)[
            arr2[i]= val
        ]
       else if(arr.length < index) {
            arr2[index]= val
        }
        else {
            arr2.push(arr[i])
        }

    }
   
      console.log(`arr1 ${arr} changed ${arr2} `)
}


insertElementInarrInexistingIndex(arr, 2,"val")


Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};
let arrInsert= [ 'A', 'B', 'E' ];
arrInsert.insert(2, 'C', 'D');
console.log(arrInsert);
//splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
// 3 way 
const numbers = ['one', 'two', 'four', 'five']
numbers.splice(2, 0, 'three');

console.log(numbers)
// 4th way
let xx= ['one', 'two', 'four', 'five']
function replaceValueinindex(arr,index,val) {
    let newarr = arr.map(function(e, i){
        return (i === index)? val:e;
    })
    console.log(newarr);
}

replaceValueinindex(xx,3,"sss")

// delete element from array
    // 1- without mutating the array
        //You could use methods like:

            // 1 - Array.prototype.slice()
                const arrayOfLetters = ['a', 'b', 'c', 'd', 'e', 'f'];

                // here the array is copied, without the first element
                const copyWithoutFirstElement = arrayOfLetters.slice(1);
                
                // arrayOfLetters is unchanged
                console.log(arrayOfLetters) // ['a', 'b', 'c', 'd', 'e', 'f']
                
                // and copyWithoutFirstElement contains the letters from b to f
                console.log(copyWithoutFirstElement) // ['b', 'c', 'd', 'e', 'f']

            //2.  Array.prototype.slice() together with Array.prototype.concat()
            

                const halfBeforeTheUnwantedElement = arrayOfLetters.slice(0, 2)
                
                const halfAfterTheUnwantedElement = arrayOfLetters.slice(3);
                
                const copyWithoutThirdElement = halfBeforeTheUnwantedElement.concat(halfAfterTheUnwantedElement);
                
                // arrayOfLetters is unchanged
                console.log(arrayOfLetters) // ['a', 'b', 'c', 'd', 'e', 'f']
                
                console.log(copyWithoutThirdElement) // ['a', 'b', 'd', 'e', 'f']

            //3.  Array.prototype.filter()
                const arrayWithoutD = arrayOfLetters.filter(function (letter) {
                    return letter !== 'd';
                });
                // arrayOfLetters is unchanged
                console.log(arrayOfLetters); // ['a', 'b', 'c', 'd', 'e', 'f']

                console.log(arrayWithoutD); // ['a', 'b', 'c', 'e', 'f']
            //4.  A for loop and Array.prototype.push()
                const arrayWithoutB = [];

                for (let i = 0; i < arrayOfLetters.length; i++) {
                    if (arrayOfLetters[i] !== 'b') {
                        arrayWithoutB.push(arrayOfLetters[i]);
                    }
                }
                
                // arrayOfLetters is unchanged
                console.log(arrayOfLetters); // ['a', 'b', 'c', 'd', 'e', 'f']
                
                console.log(arrayWithoutB); // ['a', 'c', 'd', 'e', 'f']

                // 5. Remove the first element of an array with destructuring and the rest operator
                const arrayOfFruits = ['olive', 'apricot', 'cherry', 'peach', 'plum', 'mango'];

                const [ , ,  ...arrayOfCulinaryFruits] = arrayOfFruits;

                // arrayOfFruits is unchanged
                console.log(arrayOfFruits); // ['olive', 'apricot', 'cherry', 'peach', 'plum', 'mango']

                console.log(arrayOfCulinaryFruits); // ['apricot', 'cherry', 'peach', 'plum', 'mango']

     // 2- with mutating the array
            // Array.prototype.pop() // You can remove the last item of an array with Array.prototype.pop().
                const arrayOfNumbers = [1, 2, 3, 4];

                const previousLastElementOfTheArray = arrayOfNumbers.pop();
                
                console.log(arrayOfNumbers); // [1, 2, 3]
                
                console.log(previousLastElementOfTheArray); // 4
            // Array.prototype.shift()  // The shift method can be used on an array to remove the first element of an array.
                const arrayOfNumbersshift = [1, 2, 3, 4];
                const previousFirstElementOfTheArray = arrayOfNumbersshift.shift();
                
                console.log(arrayOfNumbersshift); // [2, 3, 4]
                
                console.log(previousFirstElementOfTheArray); // 1

            // Array.prototype.splice()
            const arrayOfNumberssplice = [1, 2, 3, 4];

            const previousSecondElementOfTheArray = arrayOfNumberssplice.splice(1, 1);
            
            console.log(arrayOfNumberssplice); // [1, 3, 4]
            
            console.log(previousSecondElementOfTheArray); // [2]
