const fs = require('fs')

const Comment = require('../models/Comment')
const Product = require('../models/Product')
const fileHelper = require('../common/fileuploadHelper')

const updateRating = async (product) => {
  try {
    // cập nhật rating product
    const cmts = await Comment.find({ product: product })
    const pro = await Product.findOne({ _id: product })
    let rating = 0
    cmts.forEach((c) => (rating += c.starNumber))
    pro.rating = rating / cmts.length

    await pro.save()
  } catch (error) {}
}

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const comments = await Comment.find()
        .populate('user', ['name', 'image'])
        .populate('product', ['name', 'image'])
      return res.json({ success: true, data: comments })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const product = await Comment.findOne({ _id: id })
        .populate('user', ['name', 'image'])
        .populate('product', ['name', 'image'])
      if (!product) {
        res.status(400).json({ success: false, message: 'Comment not found' })
      }

      return res.json({ success: true, data: product })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getByIdProduct: async function (req, res, next) {
    try {
      const { productid } = req.params
      const comment = await Comment.find({ product: { _id: productid } })
        .populate('user', ['name', 'image'])
        .populate('product', ['name', 'image'])
      if (!comment) {
        res.status(400).json({ success: false, message: 'Comment not found' })
      }

      return res.json({ success: true, data: comment })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      let image = ''
      const { userId } = req

      if (req.files) {
        image = await fileHelper.saveImageProduct(req)
      }

      const { starNumber, reason, description, product } = req.body
      const comment = new Comment({
        starNumber: starNumber,
        reason: reason,
        description: description,
        image: image,
        user: userId,
        product: product,
      })

      await comment.save()
      await updateRating(product)
      const id = comment._id
      const commentfind = await Comment.findOne({ _id: id }).populate('user', [
        'name',
        'image',
      ])
      return res.json({
        success: true,
        message: 'Create successfully',
        data: commentfind,
      })
    } catch (error) {
      console.log(error.message)
      return res
        .status(400)
        .json({ success: false, message: 'Data is not valid' })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      await fileHelper.deleteImageProductById(id)

      const comment = await Comment.findByIdAndDelete({ _id: id })
      if (!comment) {
        return res
          .status(400)
          .json({ success: false, message: 'Comment not found' })
      }

      await updateRating(comment.product)

      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
