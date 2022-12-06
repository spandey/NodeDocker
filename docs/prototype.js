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

let foo = function (name) {
    this.myName = name;
    this.tellMyName = function () {
        console.log(this.myName);
    }
}
let fooObj1 = new foo('Shambhu'); // with new we are using as a constructor method it will create a new object of foo evry time
fooObj1.tellMyName();  // Shambhu  // and whenever we initiate tellmyname() it will consume new memory

let fooObj2 = new foo('Atharv');
fooObj2.tellMyName(); // Atharv


// so to use single spance memory for these type of instances javascript provide PROTOTYPE...
// Let See with the same example again...

let fooProto = function(name) {
     this.myName = name;
    }
    fooProto.prototype.tellMyName = function() {   console.log(this.myName);}
    
let fooObjp1 = new fooProto('Shambhu');
fooObjp1.tellMyName(); // will print Shambhu
let fooObjp2 = new fooProto('Atharv');
fooObjp2.tellMyName(); // will print Atharv

    
