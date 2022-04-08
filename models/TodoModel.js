var mongoose = require("mongoose")

var todoSchema = mongoose.Schema({
    task:{type:String},
    status:{type:Number,default:1},
    date:{type:Date}
});
var todoModel = mongoose.model("todo" , todoSchema);

module.exports = todoModel;