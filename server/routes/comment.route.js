const express = require('express')
const commentService = require('../services/comment.service')
const verifyToken = require('../middleware/auth')

const route = express.Router()

// @route GET /api/comments
// @desc Get all comments
// @access Private
route.get('/', verifyToken, commentService.getAll)

// @route GET /api/comments/:id
// @desc Get comment by id
// @access Privete
route.get('/:id',verifyToken, commentService.getById)

// @route GET /api/comments/:productid
// @desc Get comment by id
// @access Privete
route.get('/product/:productid',verifyToken,commentService.getByIdProduct)
// @route POST /api/comments/
// @desc Create comment
// @access Private
route.post('/', verifyToken, commentService.create)

// @route DELETE /api/comments/:id
// @desc Delete comment by id
// @access Private
route.delete('/:id', verifyToken, commentService.delete)

module.exports = route
