const router = require('express').Router()
const {createTask,updateTask,deleteTask,showTask} = require('../controller/taskController')


router.get('/',showTask)
router.post('/',createTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)




module.exports = router