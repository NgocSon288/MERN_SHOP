const fs = require('fs')

const Product = require('./../models/Product')
const fileHelper = require('./../common/fileuploadHelper')

const updatePrivate = async function (req, res, next) {
  const { id } = req.params
  const { name, category, price, image, content } = req.body

  const newProduct = {
    name: name,
    category: category,
    price: price,
    image: image,
    content: content,
  }

  const oldProduct = await Product.findOne({ _id: id })
  const product = await Product.findByIdAndUpdate({ _id: id }, newProduct, {
    new: true,
  })

  if (!product) {
    res.status(400).json({ success: false, message: 'Product not found' })
  }

  res.json({ success: true, message: 'Update successfully' })
}

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const products = await Product.find().populate('category', [
        'name',
        'description',
      ])

      res.json({ success: true, data: products })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const product = await Product.findOne({ _id: id }).populate('category', [
        'name',
        'description',
      ])
      if (!product) {
        res.status(400).json({ success: false, message: 'Product not found' })
      }

      res.json({ success: true, data: product })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      if (req.files) {
        const image = await fileHelper.saveImageImageProduct(req)

        const { name, category, price, content } = req.body
        const product = new Product({
          name: name,
          category: category,
          price: price,
          image: image,
          content: content,
        })

        await product.save()
        return res.json({ success: true, message: 'Create successfully' })
      }

      return res
        .status(400)
        .json({ success: false, message: 'Data is not valid' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      await fileHelper.deleteImageProductById(id)
      
      const product = await Product.findByIdAndDelete({ _id: id })
      if (!product) {
          
          return res
          .status(400)
          .json({ success: false, message: 'Product not found' })
      }
 
      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) {
    try {
      if (req.files) {
        const image = await fileHelper.saveImageAndDeleteImageProduct(req)
        req.body.image = image

        return await updatePrivate(req, res, next)
      } else {
        // Xoa file  image
        const image = await fileHelper.deleteImageProduct(req)
        req.body.image = image

        return await updatePrivate(req, res, next)
      }
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
