const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Order = new Schema({
  address: { type: String, required: true, default: '' },
  phone: { type: String, required: true, default: '' },
  message: { type: String, default: '' },
  paymentMethod: { type: String, required: true, default: '' },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  createdAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('Orders', Order)
