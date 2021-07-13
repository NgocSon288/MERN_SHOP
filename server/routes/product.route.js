const express = require('express')
const productService = require('./../services/product.service')
const verifyToken = require('./../middleware/auth')

const route = express.Router()

// @route GET /api/products/updaterating
// @desc Update rating
// @access Public
route.get('/updateRating', productService.updateRating) 

// @route GET /api/products
// @desc Get all products
// @access Public
route.get('/', productService.getAll)

// @route GET /api/products/:id
// @desc Get product by id
// @access Public
route.get('/:id', productService.getById)

// @route POST /api/products/
// @desc Create product
// @access Private
route.post('/', verifyToken, productService.create)

// @route DELETE /api/products/:id
// @desc Delete product by id
// @access Private
route.delete('/:id', verifyToken, productService.delete)

// @route PUT /api/products/:id
// @desc Update product by id
// @access Private
route.put('/:id', verifyToken, productService.update) 

module.exports = route
