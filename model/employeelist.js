var mongoose =require('mongoose');
var empSchema  = mongoose.Schema({
    name:String, 
    location:String, 
    position:String, 
    salary:Number
})

const empModel= mongoose.model("employeelist",empSchema);
module.exports = empModel