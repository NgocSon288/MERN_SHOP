const express = require('express')
const categoryService = require('./../services/category.service')
const verifyToken = require('./../middleware/auth')

const route = express.Router()

// @route GET /api/categories
// @desc Get all categories
// @access Public
route.get('/', categoryService.getAll)

// @route GET /api/categories/:id
// @desc Get category by id
// @access Public
route.get('/:id', categoryService.getById)

// @route POST /api/categories
// @desc Create category
// @access Private
route.post('/', verifyToken, categoryService.create)

// @route DELETE /api/categories/:id
// @desc Delete category
// @access Private
route.delete('/:id', verifyToken, categoryService.delete)

// @route PUT /api/categories/:id
// @desc Update category
// @access Private
route.put('/:id', verifyToken, categoryService.update)

module.exports = route
