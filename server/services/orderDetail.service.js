const OrderDetail = require('../models/OrderDetail')
const Order = require('../models/Order')
const User = require('../models/User')
var nodemailer = require('nodemailer')
const fs = require('fs')

module.exports = {
  getAllByOrderId: async function (req, res, next) {
    try {
      const { orderId } = req.params
      const orderDetails = await OrderDetail.find({ order: orderId }).populate(
        'product'
      )

      return res.json({ success: true, data: orderDetails })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getAllByUserId: async function (req, res, next) {
    try {
      const { userId } = req
      const orders = await Order.find({ user: userId })
      let orderDetails = []
      for (var i = 0; i < orders.length; i++) {
        let ods = await OrderDetail.find({ order: orders[i]._id }).populate(
          'product'
        )
        orderDetails.push(...ods)
      }
      return res.json({ success: true, data: orderDetails })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    const { userId } = req
    const user = await User.findOne({ _id: userId })

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sondeptrai2288@gmail.com',
        pass: 'SOn01698182219',
      },
    })

    var html = await fs.readFileSync('./template/emailTemplate.html').toString()

    var mailOptions = {
      from: 'sondeptrai2288@gmail.com',
      to: user.email,
      subject: 'ĐƠN HÀNG ĐẾN TỪ ELECTRONIC SHOP',
      html: html,
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
      } else {
        console.log('Email sent: ' + info.response)
      }
    })

    try {
      const { message, paymentMethod, orderDetails } = req.body

      if (!user) {
        return res.status(403).json({
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

      orderDetails.forEach(async (item) => {
        const od = new OrderDetail({
          count: item.count,
          order: order._id,
          product: item.product,
        })

        await od.save()
      })

      return res.json({
        success: true,
        message: 'Create successfully',
      })
    } catch (error) {
      console.log('error', error.message)
      res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      const order = await OrderDetail.findByIdAndDelete(id)
      if (!order) {
        return res
          .status(400)
          .json({ success: false, message: 'OrderDetail not found' })
      }

      order.isDeleted = true
      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
}
