const express = require('express')
const Stock = require('../models/stock')
const router = new express.Router()
const auth = require('../auth/auth')



// creating a new stock for a user
router.post('/stocks', auth, async (req, res) => {

    const stock = new Stock({
        ...req.body,
        owner: req.user._id
    })

    try {
        const stocks = await stock.save()
        res.status(201).send(stocks)
    } catch (e) {
        res.status(400).send(e)
    }
    
})

// // get stocks created by a user
// router.get('/stocks', auth, async (req, res) => {
//
//     try {
//         const stocks = await Stock.find({ owner: req.user._id})
//
//         res.send(stocks)
//
//     } catch (e) {
//
//         res.status(500).send(e)
//
//     }
//
// })



// GET /stocks?limit=1
// GET /stocks?sortBy=createdAt:desc
router.get('/stocks', auth, async (req, res) => {

    const sort = {}


    if (req.query.sortBy) {
        const parts = req.query.sortBy.split(':')
        // grabbing the value in the first array
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }

    try {

        await req.user.populate({
            path: 'stocks',
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                // property short hand syntax
                sort
            }
        }).execPopulate()
        res.send(req.user.stocks)
    } catch (e) {
        res.status(500).send(e)
    }


})






// get a specific stock created by user
router.get('/stocks/:id', auth, async (req, res) => {
    //const _id = req.params.id

    try {

        const stock = await Stock.findOne({ _id: req.params.id, owner: req.user._id })

        if (!stock) {
            return res.status(404).send()
        }

        res.send(stock)
        
    } catch (e) {
        
        res.status(500).send()
    }
    
})

// router.patch('/stocks/:id', auth, async (req, res) => {
//     try {
//
//         let stock = await Stock.findById(req.params.id)
//
//         if (!stock) {
//             return res.status(404).json({ msg: 'Stock not found'})
//         }
//
//         if (stock.user.toString() !== req.user.id) {
//             return res.status(401).json({ msg: 'Not Authorized'})
//         }
//
//         stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
//
//         res.json(stock)
//
//     } catch (e) {
//         res.status(500).send('Server Error')
//     }
//
// })


// // edit specific stock
router.patch('/stocks/:id', auth, async (req, res) => {
    // convert an object to an array of its properties
    // const updates = Object.keys(req.body)
    // const allowedUpdates = ['item', 'quantity', 'rate', 'distributor', 'unit']
    // const isValidOperation = updates.every((update) => {
    //     return allowedUpdates.includes(update)
    // })
    //
    // if (!isValidOperation) {
    //     return res.status(400).send({ error: 'Invalid updates!'})
    // }

    try {
        // find by update bypasses mongoose hence providing a direct operation(that is why we set run validators)
        const stock = await Stock.findByIdAndUpdate({ _id: req.params.id, owner: req.user._id}, req.body, { new: true, runValidators: true }, )

        //const stock = await Stock.findById(req.params.id)

        //const stock = await Stock.findOne({ _id: req.params.id, owner: req.user._id})


        if (!stock) {
            return res.status(404).send()
        }

        // updates.forEach((update) => {
        //     return stock[update] = req.body[update]
        // })

        // where our middleware is being executed
        await stock.save()

        res.send(stock)

    } catch (e) {

        res.status(400).send(e)
    }
})


// delete a stock
router.delete('/stocks/:id', auth, async (req, res) => {
    try {
        //const stock = await Stock.findByIdAndDelete(req.params.id)
        const stock = await Stock.findOneAndDelete({_id: req.params.id, owner: req.user._id})

        if (!stock) {
            res.status(404).send()
        }
        res.send(stock)
    } catch (e) {
        res.status(500).send()
    }

})







module.exports = router