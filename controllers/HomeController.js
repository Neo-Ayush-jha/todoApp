const todoModel = require("../models/TodoModel");
async function home(req,res){
    // -1 is accending jo new he vo jisko close ka diye vo neche chala jaee ga
    let todo = await todoModel.find({}).sort({'status':-1});
    return res.render("index",{"todo":todo});
}
async function insertTask(req,res){
    let checkTodo = await todoModel.findOne({'task':req.body.task})
    if(checkTodo !== null){
        await todoModel.findByIdAndUpdate(checkTodo._id,{"status":1})
    }
    else{
    var todo = new todoModel();
    todo.task=req.body.task;
    todo.save();
    }
    res.redirect("/");
}
function closeTask(req,res){
    let id = req.params.id
    todoModel.findByIdAndUpdate({_id:id},{status:0},function(err,response){
        if(err) return err
        return res.redirect("/")
    })
}
function removeTask(req,res){
    let id = req.params.id
    todoModel.findByIdAndRemove({_id:id},function(err,response){
        if(err) return err
        return res.redirect("/")
    })
}
module.exports={
    home,
    insertTask,
    closeTask,
    removeTask,
}