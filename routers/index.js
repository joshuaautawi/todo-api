const router = require('express').Router()
    , homeRouter = require('./home.route')
    , taskRoute = require('./task.route')
    , userRoute = require('./user.route')
    , {isLogin} = require('../middleware/auth')



router.use('/home',homeRouter)
router.use('/task',isLogin,taskRoute)
router.use('/user',userRoute)




module.exports = router