const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const OrderDetail = new Schema({
  count: { type: Number, required: true, default: 0 }, 
  order: { type: Schema.Types.ObjectId, ref: 'Orders' }, 
  product: { type: Schema.Types.ObjectId, ref: 'Products' }, 
})

module.exports = mongoose.model('OrderDetails', OrderDetail)
