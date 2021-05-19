const express = require('express')
const categoryUserService = require('./../services/categoryUser.service')
const verifyToken = require('./../middleware/auth')

const route = express.Router()

// @route GET /api/categoryUsers
// @desc Get all categoryUsers
// @access Public
route.get('/', categoryUserService.getAll)

// @route GET /api/categoryUsers/:id
// @desc Get category by id
// @access Public
route.get('/:id', categoryUserService.getById)

// @route POST /api/categoryUsers
// @desc Create category
// @access Private
route.post('/', verifyToken, categoryUserService.create)

// @route DELETE /api/categoryUsers/:id
// @desc Delete category
// @access Private
route.delete('/:id', verifyToken, categoryUserService.delete)

// @route PUT /api/categoryUsers/:id
// @desc Update category
// @access Private
route.put('/:id', verifyToken, categoryUserService.update)

module.exports = route
