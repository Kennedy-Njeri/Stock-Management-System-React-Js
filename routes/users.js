const express = require('express')
const router = new express.Router()
const User = require('../models/users')
const { check, validationResult } = require('express-validator');












module.exports = router