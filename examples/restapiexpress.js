const Joi = require('joi');
const express = require('express');
const app = express();
app.use(express.json()); // middleware request pipleine for parsing req.body

const employeeData = [
    { id: 1, name:"Shambhu", salary: "1000" },
    { id: 2, name:"Atharv", salary: "5000" },
    { id: 3, name:"Amit", salary: "2000" }
]
//get API 

app.get('/', (req, res)=>{

    res.send("hello word")
})

app.get("/api/employee", (req,res)=> {

    res.send(employeeData);
})

app.get("/api/employee/:id", (req,res)=> {

const data = employeeData.find((c)=> c.id === parseInt(req.params.id))
  
if(!data)
    res.status(404).send({"message":"Not found"})
    res.status(200).send({data:data})
//
})
//post API
app.post("/api/employes", (req,res)=> {
    let emp =  { id: employeeData.length+1 , name: req.body.name, salary: req.body.salary }

   
    const {error} = validateField(req.body);
    if(error){
        res.status(400).send(error.details)
    }
    employeeData.push(emp)
    res.send(employeeData);
})


//put APi
app.put("/api/employee/:id", (req,res)=> {

    // find 
    // if not find retuen 404 
    const data = employeeData.find((c)=> c.id === parseInt(req.params.id))
      
    if(!data)
        res.status(404).send({"message":"Not found"})
    // validate
    //not valid return 400 Bad Request
    
    const {error} = validateField(req.body);
    if(error){
    res.status(400).send(error.details)
    }

    // update the doc
    data.name = req.body.name;
    data.salary = req.body.salary;
    // return result
    res.status(200).send({data:data})
        
})

//delete





const port = process.env.port || 3001
app.listen(port,"localhost",()=> {console.log(`server is running on ${port}`)})

function validateField(fields){
    const schema = Joi.object(
        { 
        name: Joi.string().min(3).max(30).required(),
        salary: Joi.number().min(5).required()    
        })

    return schema.validate(fields);
}