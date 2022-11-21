const Joi = require('joi');
const express = require('express');
const app = express();

// Express v4.16.0 and higher
// --------------------------
// const express = require('express');

// app.use(express.json());
// app.use(express.urlencoded({
//   extended: true
// }));

// // For Express version less than 4.16.0
// // ------------------------------------
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

app.use(express.json()); // middleware 1 request pipleine for parsing req.body 

const employeeData = [
    { id: 1, name:"Shambhu", salary: "1000" },
    { id: 2, name:"Atharv", salary: "5000" },
    { id: 3, name:"Amit", salary: "2000" }
]

app.use((req,res,next)=>{
    console.log("first");
    //res.send('<h1>My first custom middlewar</h1>')
    next();
    })
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




// midileware 2 for 404 
app.use(function (req, res, next) {
    console.log("404 not found");
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
     
    // render the error page
    res.status(err.status || 500);
    res.render(err.message);
  });
app.use((req, res)=>{
res.status(404).render('404',{'title':'404'})


}); // next() not required if it is in last


const port = process.env.port || 3001
app.listen(port,"localhost",()=> {console.log(`server is running on ${port}`)})

