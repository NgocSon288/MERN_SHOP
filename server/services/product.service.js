const fs = require('fs')

const Product = require('./../models/Product')
const Comment = require('./../models/Comment')
const fileHelper = require('./../common/fileuploadHelper')

const updatePrivate = async function (req, res, next) {
  const { id } = req.params
  const pro = await Product.find({ _id: id })
  const {
    name,
    price,
    promotion,
    image,
    description,
    isFreeship,
    isInstallment,
    content,
    parameter,
    category,
    brand,
  } = req.body

  const newProduct = {
    name: name,
    category: category,
    price: price,
    promotion: promotion,
    description: description,
    isFreeship: isFreeship,
    isInstallment: isInstallment,
    image: image,
    viewCount: pro.viewCount || 0,
    rating: pro.rating || 0,
    parameter: [...JSON.parse(parameter)],
    content: content,
    brand: brand,
  }

  const product = await Product.findByIdAndUpdate({ _id: id }, newProduct, {
    new: true,
  })

  if (!product) {
    res.status(400).json({ success: false, message: 'Product not found' })
  }

  return res.json({ success: true, message: 'Update successfully' })
}

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const products = await Product.find()
        .populate('category', ['name', 'description'])
        .populate('brand', ['name', 'logo'])

      return res.json({ success: true, data: products })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const product = await Product.findOne({ _id: id })
        .populate('category', ['name', 'description'])
        .populate('brand', ['name', 'logo'])
      if (!product) {
        res.status(400).json({ success: false, message: 'Product not found' })
      }

      return res.json({ success: true, data: product })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      if (req.files) {
        const image = await fileHelper.saveImageProduct(req)

        const {
          name,
          price,
          promotion,
          description,
          isFreeship,
          isInstallment,
          content,
          parameter,
          category,
          brand,
        } = req.body
        const product = new Product({
          name: name,
          category: category,
          price: price,
          promotion: promotion,
          description: description,
          isFreeship: isFreeship,
          isInstallment: isInstallment,
          image: image,
          parameter: [...JSON.parse(parameter)],
          content: content,
          brand: brand,
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
  updateRating: async function (req, res, next) {
    try {
      const products = await Product.find()
        .populate('category', ['name', 'description'])
        .populate('brand', ['name', 'logo'])

      const cmts = []
      const comments = await Comment.find()
      for(let i=0;i< products.length;i++) {

      
        const cs = comments.filter((c) => {
          return c.product + '' == products[i]._id + ''
        })

        if (cs && cs.length > 0) {
          let sum = 0

          sum = cs.reduce((sum, { starNumber }) => sum + starNumber, 0)
          products[i].rating = Number(sum) / Number(cs.length)
          await products[i].save()
        }
      }

      const a = products.map((p) => {
        return { name: p.name, rating: p.rating }
      })

      return res.json({ success: true, data: comments })
    } catch (error) {
      console.log(error.message)
      res.status(500).json({ success: false, message: error })
    }
  },
}
