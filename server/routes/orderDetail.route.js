const express = require('express')
const orderDetailService = require('../services/orderDetail.service')
const verifyToken = require('../middleware/auth')

const route = express.Router()

// @route GET /api/orders/:orderId
// @desc Get all orders
// @access Private
route.get('/:orderId', verifyToken, orderDetailService.getAllByOrderId) 

// @route GET /api/orders/
// @desc Get all orders by user id
// @access Private

route.get('/', verifyToken, orderDetailService.getAllByUserId) 

// @route POST /api/orders
// @desc Create orderDetail
// @access Private
route.post('/', verifyToken, orderDetailService.create)

// @route DELETE /api/orders/:id
// @desc Delete orderDetail
// @access Private
route.delete('/:id', verifyToken, orderDetailService.delete)

module.exports = route
