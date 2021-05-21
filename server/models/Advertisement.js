const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Advertisement = new Schema({
  name: { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
  image: { type: String, required: true, default: '' },
  url: { type: String, required: true, default: '' },
  displayOrder: { type: String, required: true, default: 0 },
})

module.exports = mongoose.model('Advertisements', Advertisement)
