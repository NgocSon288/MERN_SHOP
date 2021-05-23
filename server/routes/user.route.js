const express = require('express')
const userService = require('./../services/user.service')
const verifyToken = require('./../middleware/auth')

const route = express.Router()

// @route GET /api/users
// @desc Get all users
// @access Public
route.get('/', userService.getAll)

// @route GET /api/users/login
// @desc Login
// @access Public
route.post('/login', userService.login)

// @route GET /api/users/auth
// @desc Check Auth user
// @access Private
route.get('/auth', verifyToken, userService.checkAuth)

// @route GET /api/users/:id
// @desc Get user by id
// @access Public
route.get('/:id', userService.getById)

// @route POST /api/users/
// @desc Create user
// @access Public
route.post('/', userService.create)

// @route DELETE /api/users/:id
// @desc Delete user by id
// @access Private
route.delete('/:id', verifyToken, userService.delete)

// @route PUT /api/users/
// @desc Update user by current id
// @access Privete
route.put('/', verifyToken, userService.update)

// @route PUT /api/users/account
// @desc Update account by current id
// @access Privete
route.put('/account', verifyToken, userService.updateAccount)

// @route PUT /api/users/permission/:id
// @desc Update permission user by id
// @access Private
route.put('/permission/:id', verifyToken, userService.updatePermission)

module.exports = route
