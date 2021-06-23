require('dotenv').config()
const fs = require('fs')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')

const User = require('./../models/User')
const CategoryUser = require('./../models/CategoryUser')
const fileHelper = require('./../common/fileuploadHelper')
const verifyToken = require('./../middleware/auth')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const Users = await User.find()
        .populate('categoryUser', ['name', 'displayName', 'description'])
        .select('-password')

      return res.json({ success: true, data: Users })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  login: async function (req, res, next) { 
    try {
      const { username, password } = req.body
  
      if (!username || !password) { 
        return res.status(400).json({
          success: false,
          message: 'Username or Password is not valid',
        })
      } 

      const user = await User.findOne({ username })
 
      if (!user) { 
        return res
          .status(400)
          .json({ success: false, message: 'Incorrect Username or Password' })
      }
 
      const passwordValid = await argon2.verify(user.password, password)
 
      if (!passwordValid) { 
        return res
          .status(400)
          .json({ success: false, message: 'Incorrect Username or Password' })
      }

      // return token
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET
      )

      return res.json({
        success: true,
        message: 'User logged in successfully',
        accessToken,
      })
    } catch (error) {
      console.log('error')
      return res.status(500), json({ success: false, message: error.message })
    }
  },
  checkAuth: async function (req, res, next) {
    try {
      const { userId } = req

      const user = await User.findOne({ _id: userId })
        .select('-password')
        .populate('categoryUser', ['name', 'displayName', 'description'])

      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: 'User not found' })
      }

      return res.json({ success: true, data: { ...user } })
    } catch (error) {
      console.log('error', error)
      return res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const user = await User.findOne({ _id: id }).populate('category', [
        'name',
        'displayName',
        'description',
      ])

      if (!user) {
        res.status(400).json({ success: false, message: 'User not found' })
      }

      return res.json({ success: true, data: user })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      if (req.files) {
        const { name, username, password, email, address, phone } = req.body
        const checkUser = await User.findOne({ username })

        if (checkUser) {
          return res
            .status(400)
            .json({ success: false, message: 'User already exists' })
        }

        const hashedPassword = await argon2.hash(password)

        const image = await fileHelper.saveImageUser(req)

        const categoryUser = await CategoryUser.findOne({ name: 'CUSTOMER' })
        const user = new User({
          name: name,
          username: username,
          password: hashedPassword,
          email: email,
          phone: phone,
          image: image,
          address: address,
          categoryUser: categoryUser._id,
        })

        await user.save()

        // return token
        const accessToken = jwt.sign(
          { userId: user._id },
          process.env.ACCESS_TOKEN_SECRET
        )

        return res.json({
          success: true,
          message: 'Create successfully',
          accessToken,
        })
      }

      return res
        .status(400)
        .json({ success: false, message: 'Data is not valid' })
    } catch (error) {
      console.log('error', error.message)
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  delete: async function (req, res, next) {
    try {
      const { id } = req.params
      const { userId } = req

      const currentUser = await User.findOne({ _id: userId }).populate(
        'categoryUser',
        ['name', 'displayName', 'description']
      )

      if (currentUser.categoryUser.name === 'CUSTOMER') {
        return res.status(403).json({
          success: false,
          message: 'You do not have permission to delete this user',
        })
      }

      const userCanDelete = await User.find({ _id: id })

      if (userCanDelete.name === 'ADMIN') {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to delete admin's permissions.",
        })
      }

      const user = await User.findByIdAndDelete(id)
      if (!user) {
        return res
          .status(400)
          .json({ success: false, message: 'User not found' })
      }

      await fileHelper.deleteImagePath('public/images/user/' + user.image)

      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) {
    try {
      // trả về image cũ hoặc mới
      const image = await fileHelper.saveImageAndDeleteImageUser(req)

      const { userId } = req
      const { name, email, address, phone } = req.body
      const oldUser = await User.findById(userId)
      if (!oldUser) {
        return res
          .status(400)
          .json({ success: false, message: 'User not found' })
      }

      oldUser.name = name
      oldUser.email = email
      oldUser.phone = phone
      oldUser.image = image
      oldUser.address = address
      await oldUser.save()

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  updateAccount: async function (req, res, next) {
    try {
      const { userId } = req
      const { username, password, newPassword } = req.body
      const user = await User.findById(userId)
      if (!user) {
        res.status(400).json({ success: false, message: 'User not found' })
      }

      const passwordValid = await argon2.verify(user.password, password)

      if (!passwordValid) {
        return res
          .status(400)
          .json({ success: false, message: 'Incorrect Username or Password' })
      }

      const hashedPassword = await argon2.hash(newPassword)

      user.password = hashedPassword

      await user.save()

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  updatePermission: async function (req, res, next) {
    // can kiem tra permission nguoi gui request co phai la admin

    try {
      const { id } = req.params
      const { userId } = req

      const user = await User.findOne({ _id: id }).populate('categoryUser', [
        'name',
        'displayName',
        'description',
      ])

      const currentUser = await User.findOne({ _id: userId }).populate(
        'categoryUser',
        ['name', 'displayName', 'description']
      )

      if (currentUser.categoryUser.name === 'CUSTOMER') {
        return res.status(403).json({
          success: false,
          message: 'You do not have permission to update this user',
        })
      }

      if (user.name === 'ADMIN') {
        return res.status(403).json({
          success: false,
          message: "You do not have permission to update admin's permissions.",
        })
      }

      const categories = await CategoryUser.find()
      const category = await categories.find(
        (ca) => ca.name !== user.categoryUser.name
      )

      user.categoryUser = category._id
      user.save(user)

      res.json({
        success: true,
        message: 'Update permission successfully',
        data: category,
      })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
