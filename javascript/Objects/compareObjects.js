/**
 * Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.

    Use Object.keys() to get all the keys of the second object.
    Use Array.prototype.every(), Object.prototype.hasOwnProperty() and strict comparison to determine
    if all keys exist in the first object and have the same values.
 * 
 */

    let obj1 = { age: 25, hair: 'long', beard: true}
    let obj2 = { hair: 'long', beard: true}
    
    let compareObjects = (sourceObj, compObje)=>{
        return Object.keys(sourceObj).every((key)=> compObje.hasOwnProperty(key) && sourceObj[key] == compObje[key])
       }
    
    console.log(compareObjects(obj2, obj1))  // OUTPUT TRUE CoZ all key of obj2 is in obj1
    
    console.log(compareObjects( obj1, obj2)) // OUTPUT FALSE coz all key of obj1 is not in obj2