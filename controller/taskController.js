const { Task } = require('../models')


module.exports = {
    createTask : async (req,res)=>{
        try{
            await Task.create({
                ...req.body,
                user_id : req.user.id
            })
            return res.status(200).json({status : "success" , message : "Task has been created !"})
        }catch(e){
            return res.status(400).json({status : "failed", message : "Error has occured !"})
        }
        
    },
    updateTask : async (req,res)=>{
        try{
            const task = await Task.update({...req.body},{where : { id : req.params.id , user_id : req.user.id}})
            if(!task[0]) return res.status(400).json({status:"failed",message: "Sorry , you are not authorize for this task"})
            return res.status(200).json({status : "success" , message : "update success"})
        }catch(e){
            return res.status(400).json({status : "failed", message : "Error has occured !"})
        }
    },
    deleteTask : async (req,res)=>{
        try{
            const task =await Task.destroy({
                where : {
                    id : req.params.id,
                    user_id : req.user.id
                }
            })
            if(!task[0]) return res.status(400).json({status:"failed",message: "Sorry , you are not authorize for this task"})
            return res.status(200).json({status : "success" , message : "delete success"})
        }catch(e){
            return res.status(400).json({status : "failed", message : "Error has occured !"})
        }
    },
    showTask : async (req,res)=>{
        try{
            const task = await Task.findAll({
                where : {
                    user_id : req.user.id
                }
            })
            
            return res.status(200).json({status : "success" , data : task})
        }catch(e){
            return res.status(400).json({status : "failed", message : "Error has occured !"})
        }
    }
}