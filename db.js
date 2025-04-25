var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://nelbin:nelbin@cluster0.v0rdvpr.mongodb.net/casestudy2?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>{console.log(err)})