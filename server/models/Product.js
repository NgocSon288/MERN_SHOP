const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Product = new Schema({
  name: { type: String, required: true, default: '' },
  category: { type: Schema.Types.ObjectId, ref: 'Categories' },
  price: { type: Number, required: true, default: 0 },
  image: { type: String, required: true, default: '' },
  content: { type: String, required: true, default: '' },
  createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Products', Product)
