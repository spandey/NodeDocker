// If you have ever worked with JavaScript arrays or objects or strings, you have noticed that there are a couple of methods that are available by default.

// For example:

// var arr = [1, 2, 3, 4];
// arr.reverse(); // returns [4,3,2,1] 

// var obj = { id: 1, value: "Some value" };
// obj.hasOwnProperty('id'); // returns true

// var str = "Hello World";
// str.indexOf('W'); // returns 6

//     Whenever we initiate any array, string or object JavaScript engine propide prototype.and that prototype has lots of predefine methods just like
//     above examples ...  here arr.reverse(); , obj.hasOwnProperty(); and  str.indexOf() are protypical methed provided by JavaScript.

//     We can create our method also but it will not works for others or it will consume extra memory with each occurance.

//     Examples..

let employee = function (name) {
    this.myName = name;
    this.doJob = function (post) {
        console.log(`Mr. ${this.myName} is ${post}`);
    }
}
let empObj1 = new employee('Shambhu'); // with new we are using as a constructor method it will create a new object of emp evry time
empObj1.doJob("SE");  // Shambhu  // and whenever we initiate tellmyname() it will consume new memory

let empObj2 = new employee('Atharv');
empObj2.doJob("Bloger"); // Atharv


// so to use single spance memory for these type of instances javascript provide PROTOTYPE...
// Let See with the same example again...

let empProto = function(name) {
     this.myName = name;
    }
    
    // empProto.prototype.doJob = function (post) {
    //     console.log(`Mr. ${this.myName} is ${post}`);
    // }

    // or


//     const doJob = function (post) {
//         console.log(`Mr. ${this.myName} is ${post}`);
//     }
//  empProto.prototype.doJob = doJob;

// or

function doJob (post) {
    console.log(`Mr. ${this.myName} is ${post}`);
}
empProto.prototype.doJob = doJob;

let empObjp1 = new empProto('Shambhu');
empObjp1.doJob("TL"); // will print Shambhu
let empObjp2 = new empProto('Atharv');
empObjp2.doJob("Great Scintist"); // will print Atharv

    
