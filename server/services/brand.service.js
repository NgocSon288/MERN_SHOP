const fs = require('fs')

const Brand = require('./../models/Brand')
const fileHelper = require('./../common/fileuploadHelper')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const brands = await Brand.find()

      return res.json({ success: true, data: brands })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const brand = await Brand.findOne({ _id: id })

      if (!brand) {
        res.status(400).json({ success: false, message: 'brand not found' })
      }

      return res.json({ success: true, data: brand })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      if (req.files) {
        const logo = await fileHelper.saveImageBrand(req) 
        const { name, description } = req.body
        const brand = new Brand({
          name: name,
          description: description,
          logo: logo,
        })
 

        await brand.save()
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
      await fileHelper.deleteImageBrandById(id)

      const brand = await Brand.findByIdAndDelete({ _id: id })
      if (!brand) {
        return res
          .status(400)
          .json({ success: false, message: 'Brand not found' })
      }

      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) { 
    const { id } = req.params
    const brand = await Brand.findOne({ _id: id })
    let { logo } = brand
    const { name, description } = req.body
 
    try {
      if (req.files) {
        logo = await fileHelper.saveImageAndDeleteImageBrand(req) 
      }

      const brand = await Brand.findOne({ _id: id })

      if (!brand) {
        return res
          .status(400)
          .json({ success: false, message: 'Brand not found' })
      }

      brand.logo = logo
      brand.name = name
      brand.description = description

      await brand.save()

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
