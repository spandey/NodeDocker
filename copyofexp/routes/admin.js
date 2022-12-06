const Joi = require('joi');

const express = require('express');
const route = express.Router();
const {employeeData} = require("./../data/data.json")

route.get("/employes", (req,res)=> {

    res.send(employeeData);
})

route.get("/employe/:id", (req,res)=> {

const data = employeeData.find((c)=> c.id === parseInt(req.params.id))
  
if(!data)
    res.status(404).send({"message":"Not found"})
    res.status(200).send({data:data})
//
})
//post API
route.post("/employes", (req,res)=> {
    let emp =  { id: employeeData.length+1 , name: req.body.name, salary: req.body.salary }

   
    const {error} = validateField(req.body);
    if(error){
        res.status(400).send(error.details)
    }
    employeeData.push(emp)
    res.send(employeeData);
})


//put APi
route.put("/employe/:id", (req,res)=> {

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


module.exports = route;
function validateField(fields){
    const schema = Joi.object(
        { 
        name: Joi.string().min(3).max(30).required(),
        salary: Joi.number().min(5).required()    
        })

    return schema.validate(fields);
}