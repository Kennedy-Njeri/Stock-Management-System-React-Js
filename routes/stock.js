const express = require('express')
const router = new express.Router()




// register a user
router.get('/users', async (req, res) => {
    res.send("Get all stock data")
})



router.post('/stock', async (req, res) => {
    res.send("Add stock")
})




router.put('/stocks/:id', async (req, res) => {
    res.send("Update stocks")
})




router.delete('/stock/:id', async (req, res) => {
    res.send("Delete stock")
})







module.exports = router