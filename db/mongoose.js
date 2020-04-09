const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27018/store-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})