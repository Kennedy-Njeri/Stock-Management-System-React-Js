const express = require('express')
const path = require('path');
require('./db/mongoose')
const userRouter = require('./routes/users')
const storeRouter = require('./routes/stock')



const app = express()
const port = process.env.PORT || 5000


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json())



app.use(userRouter, storeRouter)








app.listen(port, () => {
    console.log('Server is up on port ' + port)
})