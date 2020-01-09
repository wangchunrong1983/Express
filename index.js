
const express = require('express')
const app = express()
const path = require('path')
const logger = require ('./middleware/logger')



//Init middleware
app.use(logger);

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Set static folder
app.use(express.static(path.join(__dirname,'public')))

app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>console.log(`server is running on ${PORT}`))