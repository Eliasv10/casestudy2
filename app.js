// Task1: initiate app and run server at 3000
var express = require ('express');

var app = express();
var port =3000;


const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection 
require(`./db`)

//Task 2 : write api with error handling and appropriate api mentioned in the TODO below
var empModel = require('./model/employeelist');
app.use(express.json())







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist',async(req,res)=>{
    try{
        var data = await empModel.find();
        res.send(data)
    } catch (error){
        res.send(error)
    }
})



//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id',async(req,res)=>{
    try{
        var data = await empModel.findById(req.params.id);
        res.send(data)
    } catch (error){
        res.send(error)
    }
})




//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist',(req,res)=>{
    try {
        console.log(req.body)
        empModel(req.body).save();
        res.send("data added to db")
    }catch (error){
        res.send(error)
    }

})






//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id',async(req,res)=>{
    try{
        console.log(req.params.id)
        await empModel.findByIdAndDelete(req.params.id);
        res.send("Data Deleted")
        // res.send(id)
    }catch (error){
        res.send(error)
    }
})



//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist',async(req,res)=>{
    try{
        await empModel.findOneAndUpdate({_id:req.body._id},req.body,{new: true});
        res.send()
        // res.send(id)
    }catch (error){
        res.send(error)
    }
})


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});


app.listen(port,()=>{
    console.log(`server is up and running in ${port}`)
})
