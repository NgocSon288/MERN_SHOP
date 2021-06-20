const Category = require('./../models/Category')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const categories = await Category.find()

      return res.json({ success: true, data: categories })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const category = await Category.findOne({ _id: id })

      if (!category) {
        res.status(400).json({ success: false, message: 'Category not found' })
      }

      return res.json({ success: true, data: category })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      const { name, description } = req.body 
      const category = new Category({ name: name, description: description })
      await category.save()
      return res.json({ success: true, message: 'Create successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      const category = await Category.findByIdAndDelete({ _id: id })
      if (!category) {
        res.status(400).json({ success: false, message: 'Category not found' })
      }

      return  res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) {
    try {
      const { id } = req.params
      const { name, description } = req.body
      const newCategory = {
        name,
        description,
      }

      const category = await Category.findByIdAndUpdate(
        { _id: id },
        newCategory,
        { new: true }
      )

      if (!category) {
        res.status(400).json({ success: false, message: 'Category not found' })
      }

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
}
