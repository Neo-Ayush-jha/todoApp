var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/todo" , function (error) {
    if(error){
        console.log ("not-connected");
    }
    else{
        console.log("connect");
    }
})

module.exports=mongoose;