const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Product = new Schema({
  name: { type: String, required: true, default: '' },
  price: { type: Number, required: true, default: 0 },
  promotion: { type: Number, required: true, default: 0 },
  image: { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
  isFreeship: { type: Boolean, default: false },
  isInstallment: { type: Boolean, default: false },
  viewCount: { type: Number, default: 0 },
  rating: { type: Number, default: 0 },
  parameter: { type: Array, required: true, default: [] },
  content: { type: String, required: true, default: '' },
  createdAt: { type: Date, default: Date.now },
  category: { type: Schema.Types.ObjectId, ref: 'Categories' },
  brand: { type: Schema.Types.ObjectId, ref: 'Brands' },
})

module.exports = mongoose.model('Products', Product)
