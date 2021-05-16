const express = require('express')
const productService = require('./../services/product.service')

const route = express.Router()

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
// @access Public
route.post('/', productService.create)

// @route DELETE /api/products/:id
// @desc Delete product by id
// @access Public
route.delete('/:id', productService.delete)

// @route PUT /api/products/:id
// @desc Update product by id
// @access Public
route.put('/:id', productService.update)

module.exports = route
