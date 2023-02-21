
const fs = require("fs");
let srcFile = './data/data1.json';

function loadData(id){
    const data = require('./data/data1');
    const empdata = data.employeeData;
    const emp = empdata.find((c)=> c.id === parseInt(id))
    console.log(emp)
}

function addData(post){
  
    const emp = {
        "name":post.name, "salary": post.salary 
    }
    if (!fs.existsSync(srcFile)) {

        emp.id= 1;
        const employeeData = {employeeData:[emp]}
        //create new file if not exist
        fs.writeFileSync(srcFile, JSON.stringify(employeeData));
    }
   else {

        const file = fs.readFileSync(srcFile,"utf-8")
        let data = JSON.parse(file);
        const empdata = data.employeeData;
        const counter = (empdata) ? empdata.length:1;
        emp.id = counter+1;
     
        const json = JSON.parse(file)
    
        json.employeeData.push(emp);
        let newData =json
        
            console.log(newData);
            fs.writeFileSync(srcFile, JSON.stringify(newData, null,"\t"))
       
   }
   
}


   loadData(2)
let postData = {
    "name":"Atharv3", "salary": "500"
   }
 addData(postData);