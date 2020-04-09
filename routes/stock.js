const express = require('express')
const Stock = require('../models/stock')
const router = new express.Router()
const auth = require('../auth/auth')



// creating a new task for a user
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


router.get('/stocks', auth, async (req, res) => {

    try {
        const stocks = await Stock.find({ owner: req.user._id})

        res.send(stocks)

    } catch (e) {

        res.status(500).send(e)

    }

})



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












module.exports = router