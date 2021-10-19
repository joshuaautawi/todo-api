
const express = require('express')
    , app = express()
    , router = require('./routers/index')
    , dotenv = require('dotenv')

dotenv.config()



app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',router)


app.listen(process.env.API_PORT,()=> console.log(`Server is running on ${new Date()} , and listen in port : ${process.env.API_PORT}`))