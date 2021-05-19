const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const CategoryUser = new Schema({
  name: { type: String, required: true, default: '' },
  displayName: { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
})

module.exports = mongoose.model('CategoryUsers', CategoryUser)
