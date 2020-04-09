const mongoose = require('mongoose')




const stockSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    unit: {
        type: String,
        default: 'Set'
    },
    rate: {
        type: Number,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    total: {
        type: Number,
        default: 0
    },
    distributor: {
        type: String,
        required: true,
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






const Task = mongoose.model('Stock', stockSchema)


module.exports = Task