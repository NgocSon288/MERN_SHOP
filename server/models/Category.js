const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Category = new Schema({
  name: { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
})

module.exports = mongoose.model('Categories', Category)
