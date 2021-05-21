const express = require('express')
const productRoute = require('./product.route')
const categoryRoute = require('./category.route')
const categoryUserRoute = require('./categoryUser.route')
const userRoute = require('./user.route')
const brandRoute = require('./brand.route')

const router = express.Router()

// Test routes
router.get('/api/test', (req, res) => {
  res.send('hello world')
})

// Product Route API
router.use('/api/products/', productRoute)

// Category Route API
router.use('/api/categories/', categoryRoute)

// CategoryUser Route API
router.use('/api/categoryUsers/', categoryUserRoute)

// User Route API
router.use('/api/users/', userRoute)

// Brand Route API
router.use('/api/brands/', brandRoute)

module.exports = router
