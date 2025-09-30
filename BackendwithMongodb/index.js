const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const UserRouter = require('./routes/user.route')

dotenv.config({path: './.env'})

let backend = express()

backend.use(cors())
backend.use(express.json())

backend.use('/api', UserRouter)

mongoose.connect(process.env.MONGODBURL).then(()=>{

    console.log('DB connected');

    backend.listen(process.env.PORT, ()=>{
    
        console.log('backend running on port', process.env.PORT);    
    
    })


})
