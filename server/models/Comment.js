const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Comment = new Schema({
  likeCount: { type: Number,  default: 0 },
  dislikeCount: { type: Number,  default: 0 },
  starNumber: { type: Number, required: true, default: 0 },
  reason: { type: String, required: true, default: '' },
  description: { type: String, required: true, default: '' },
  image: { type: String, default: '' },
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  product: { type: Schema.Types.ObjectId, ref: 'Products' },
})

module.exports = mongoose.model('Comments', Comment)
