/*
Write a JavaScript program to display the current day and time in the following format.
        Today is : Tuesday.
        Current time is : 10 PM : 30 : 38
*/

let curDate = new Date();
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let today = curDate.getDay();
let curHrs = curDate.getHours();
let curMin = curDate.getMinutes();
let curSec = curDate.getSeconds();
let prePend = curHrs >=0 ? " PM " : " AM ";

curHrs = curHrs >= 12 ? curHrs-12 : curHrs;
if(curHrs == 0 && prePend == "PM"){
    if(curSec == 0 && curMin == 0){
        prePend = " Noon "
    }
}
if(curHrs == 0 && prePend == "AM"){
    if(curSec == 0 && curMin == 0){
        prePend = " MId Night "
    }
}

let result = "Today is : " +days[today]+ " <br/>   Current time is : " + curHrs +prePend + ":" + curMin + ":" + curSec;
console.log(result);