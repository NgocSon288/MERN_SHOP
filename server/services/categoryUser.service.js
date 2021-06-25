const CategoryUser = require('./../models/CategoryUser')

module.exports = {
  getAll: async function (req, res, next) { 
    try {
      const categories = await CategoryUser.find()

      return res.json({ success: true, data: categories })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const category = await CategoryUser.findOne({ _id: id })

      if (!category) {
        res.status(400).json({ success: false, message: 'CategoryUser not found' })
      }

      return res.json({ success: true, data: category })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      const { name, displayName, description } = req.body
      const category = new CategoryUser({ name: name, displayName: displayName, description: description })
      await category.save()
      return res.json({ success: true, message: 'Create successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      const category = await CategoryUser.findByIdAndDelete({ _id: id })
      if (!category) {
        res.status(400).json({ success: false, message: 'CategoryUser not found' })
      }

      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) {
    try {
      const { id } = req.params
      const { name, displayName, description } = req.body
      const newCategory = {
        name,
        displayName,
        description,
      }

      const category = await CategoryUser.findByIdAndUpdate(
        { _id: id },
        newCategory,
        { new: true }
      )

      if (!category) {
        res.status(400).json({ success: false, message: 'CategoryUser not found' })
      }

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      res.status(500).json({ success: false, message: error.message })
    }
  },
}
