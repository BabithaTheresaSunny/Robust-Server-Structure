const express=require('express');
const app=express();
const morgan=require('morgan');

const routeNotExist=(req,res,next) =>{
    console.log(`${req.path} doesnt exist`);
    next('ghgjhg');
    
};
const nameVal= (req, res,next) => {
    let name= req.params.name;
    if(name.length>10){
        res.send("invalid")
    }
    else{
        next();
    }
  }
const errorHandler=(err,req,res,next) =>{
    console.error(err);
   // res.send(res.send(err));
   res.send(err)
}

app.use(morgan('dev'));
app.get('/name/:name',nameVal);
app.use(routeNotExist)
app.use(errorHandler)
// app.use((err, req, res, next) => {
//     console.error(err.stack)
//     res.status(500).send('Something broke!')
//   })
module.exports=app;

//app.listen(5000,'hi')