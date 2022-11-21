const express = require('express');
const app = express();
const adminroute = require('./routes/admin')
const mainroute = require('./routes/main');

app.use(express.json()); // middleware 1 request pipleine for parsing req.body 



app.use((req,res,next)=>{
    console.log("first");
    //res.send('<h1>My first custom middlewar</h1>')
    next();
    })
//get API 
app.use(mainroute);
app.use('/api',adminroute);







// midileware 2 for 404 
app.use(function (req, res, next) {
    console.log("404 not found");
    var err = new Error('404 page Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
     
    // render the error page
    res.status(err.status || 500);
    res.send(`<h4>${err.message}</h4>`);
  });
// app.use((req, res)=>{
// res.status(404).render('404',{'title':'404'})


// }); // next() not required if it is in last


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