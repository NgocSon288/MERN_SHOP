const Order = require('../models/Order')
const User = require('../models/User')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const orders = await Order.find().populate('user', ['name', 'image'])

      return res.json({ success: true, data: orders })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const order = await Order.findOne({ _id: id }).populate('user', [
        'name',
        'image',
      ])

      if (!order) {
        res.status(400).json({ success: false, message: 'Order not found' })
      }

      return res.json({ success: true, data: order })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      const { userId } = req
      const { message, paymentMethod } = req.body

      // Địa chỉ số điện thoại lấy từ current user
      const user = await User.findOne({ _id: userId })
      if (!user) {
        return res
          .status(403)
          .json({
            success: falce,
            message: 'You do not have permission to create order',
          })
      }

      const order = new Order({
        address: user.address,
        phone: user.phone || '0359525432',
        message: message,
        paymentMethod: paymentMethod,
        user: userId,
      })
      await order.save()
      return res.json({
        success: true,
        message: 'Create successfully',
        data: order,
      })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      //   const order = await Order.findOne({ _id: id })
      const order = await Order.findByIdAndDelete(id)
      if (!order) {
        res.status(400).json({ success: false, message: 'Order not found' })
      }

      //   order.isDeleted = true
      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
