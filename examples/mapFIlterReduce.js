// reduce
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

let countPets = pets.reduce((obj,ele)=>{
if(! obj[ele]){
    obj[ele] =1;
}
else {
    obj[ele]++;
}

return obj;

},{})

console.log(countPets);


// Collect two days' 
// Convert the task durations to hours instead of minutes.
// Filter out everything that took two hours or more.
// Sum it all up.
// Multiply the result by a per-hour rate for billing.
// Output a formatted dollar amount.
const monday = [
    {
        'name'     : 'Write a tutorial',
        'duration' : 180
    },
    {
        'name'     : 'Some web development',
        'duration' : 120
    }
];

const tuesday = [
    {
        'name'     : 'Keep writing that tutorial',
        'duration' : 240
    },
    {
        'name'     : 'Some more web development',
        'duration' : 180
    },
    {
        'name'     : 'A whole lot of nothing',
        'duration'  : 240
    }
];

const tasks = [monday, tuesday];


let result = tasks.reduce((cur,acc)=> cur.concat(acc)) // merge both array in to single array
                   .map((e)=> e.duration/60) // convert minutes into hours
                  .filter(e => e >= 2)  // check hours should be more than or equal to 2
                  .map(rd => rd*25)  // find rate accoding to 25$/hr
                  .reduce((cur,acc)=> [+cur + +acc],0) // if not use array will send only one value and next map will not work
                  .map( amount => "$"+amount)   // out will be [$400]
                  .reduce( formateAmount  => formateAmount) // for pull out arrau 
          console.log(result)
