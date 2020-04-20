const mongoose = require('mongoose')




const stockSchema = new mongoose.Schema({
    item: {
        type: String,
        trim: true
    },
    unit: {
        type: String,
    },
    rate: {
        type: Number,
        trim: true
    },
    quantity: {
        type: Number,
        trim: true
    },
    total: {
        type: Number,
    },
    distributor: {
        type: String,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


stockSchema.pre('save', async function (next) {
    const stock = this
    stock.total = await stock.rate * stock.quantity
    
    next()
})






const Stock = mongoose.model('Stock', stockSchema)


module.exports = Stock