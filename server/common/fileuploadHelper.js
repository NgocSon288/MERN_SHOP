const fs = require('fs')

const Product = require('./../models/Product')
const User = require('./../models/User')
const Brand = require('./../models/Brand')

/////////////////////////////////////////////////////////////
// Product
const saveImageProduct = async function (req) {
  try {
    if (req.files) {
      // danh sách các image mới
      const arrFileNames = []

      let i = 1
      while (req.files[`fileUpload${i}`]) {
        const fileupload = req.files[`fileUpload${i}`]

        const randStr = Math.random() * 100000
        await fileupload.mv(
          'public/images/product/' + randStr + fileupload.name
        )
        arrFileNames.push(randStr + fileupload.name)
        i++
      }
      return arrFileNames.join('|')
    }
  } catch (error) {}
}

const saveImageAndDeleteImageProduct = async function (req) {
  try {
    if (req.files) {
      // danh sách các image cũ
      const { _id } = req.body
      const arrFileNamesOld = []
      // danh sách các image mới
      const arrFileNames = []
      if (req.body.image) {
        arrFileNames.push([...req.body.image.split('|')])
      }

      const data = await Product.findOne({ _id: _id })
      data.image.split('|').forEach((item) => arrFileNamesOld.push(item))

      let i = 1
      while (req.files[`fileUpload${i}`]) {
        const fileupload = req.files[`fileUpload${i}`]

        const randStr = Math.random() * 100000
        await fileupload.mv(
          'public/images/product/' + randStr + fileupload.name
        )
        arrFileNames.push(randStr + fileupload.name)
        i++
      }

      arrFileNamesOld.forEach((item) => {
        const check = arrFileNames.indexOf(item) !== -1

        if (!check) {
          fs.unlink('public/images/product/' + item, () => {})
        }
      })

      return arrFileNames.join('|')
    }
  } catch (error) {}
}

const deleteImageProduct = async function (req) {
  try {
    // danh sách các image cũ
    const { _id } = req.body
    const arrFileNamesOld = []
    // danh sách các image mới
    const arrFileNames = [...req.body.image.split('|')]

    const data = await Product.findOne({ _id: _id })
    data.image.split('|').forEach((item) => arrFileNamesOld.push(item))

    arrFileNamesOld.forEach((item) => {
      const check = arrFileNames.indexOf(item) !== -1

      if (!check) {
        fs.unlink('public/images/product/' + item, () => {})
      }
    })

    return arrFileNames.join('|')
  } catch (error) {}
}

const deleteImageProductById = async function (_id) {
  try {
    // danh sách các image cũ
    const arrFileNamesOld = []

    const data = await Product.findOne({ _id: _id })
    data.image.split('|').forEach((item) => arrFileNamesOld.push(item))

    arrFileNamesOld.forEach((item) => {
      fs.unlink('public/images/comment/' + item, () => {})
    })
  } catch (error) {}
}

/////////////////////////////////////////////////////////////
// User
const saveImageUser = async function (req) {
  try {
    if (req.files) {
      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/user/' + randStr + fileupload.name)
      return randStr + fileupload.name
    }
  } catch (error) {}
}

const deleteImageUserById = async function (_id) {
  try {
    const data = await Product.findOne({ _id: _id }) 

    if (data) { 
      fs.unlink('public/images/user/' + data.image, () => {}) 
    }
  } catch (error) {}
}

const deleteImagePath = async function (path) {
  try {
    fs.unlink(path, () => {})
  } catch (error) {}
}

const saveImageAndDeleteImageUser = async function (req) {
  try {
    if (req.files) { 
      // image cũ
      const { _id } = req.body
      const fileNameOld = req.body.image

      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/user/' + randStr + fileupload.name)

      fs.unlink('public/images/user/' + fileNameOld, () => {})

      return randStr + fileupload.name
    } else { 
      return req.body.image
    }
  } catch (error) {}
}

/////////////////////////////////////////////////////////////
// Brand
const saveImageBrand = async function (req) {
  try {
    if (req.files) {
      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/brand/' + randStr + fileupload.name)
      return randStr + fileupload.name
    }
  } catch (error) {
    console.log('save error')
  }
}

const deleteImageBrandById = async function (_id) {
  try {
    const data = await Product.findOne({ _id: _id })

    if (data) {
      fs.unlink('public/images/brand/' + data.image, () => {})
    }
  } catch (error) {}
}

const saveImageAndDeleteImageBrand = async function (req) {
  try {
    if (req.files) {
      // image cũ
      const { _id } = req.body
      const fileNameOld = req.body.image

      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/brand/' + randStr + fileupload.name)

      fs.unlink('public/images/brand/' + fileNameOld, () => {})

      return randStr + fileupload.name
    }

    return req.body.logo
  } catch (error) {
    return req.body.logo
  }
}

/////////////////////////////////////////////////////////////
// Advertisement
const saveImageAdvertisement = async function (req) {
  try {
    if (req.files) {
      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv(
        'public/images/advertisement/' + randStr + fileupload.name
      )
      return randStr + fileupload.name
    }
  } catch (error) {
    console.log('save error')
  }
}

const deleteImageAdvertisementById = async function (_id) {
  try {
    const data = await Product.findOne({ _id: _id })

    if (data) {
      fs.unlink('public/images/advertisement/' + data.image, () => {})
    }
  } catch (error) {}
}

const saveImageAndDeleteImageAdvertisement = async function (req) {
  try {
    if (req.files) {
      // image cũ
      const { _id } = req.body
      const fileNameOld = req.body.image

      const fileupload = req.files[`fileUpload`]

      const randStr = Math.random() * 100000
      await fileupload.mv(
        'public/images/advertisement/' + randStr + fileupload.name
      )

      fs.unlink('public/images/advertisement/' + fileNameOld, () => {})

      return randStr + fileupload.name
    }

    return req.body.logo
  } catch (error) {
    return req.body.logo
  }
}

/////////////////////////////////////////////////////////////
// Comment
const saveImageComment = async function (req) {
  try {
    if (req.files) {
      // danh sách các image mới
      const arrFileNames = []

      let i = 1
      while (req.files[`fileUpload${i}`]) {
        const fileupload = req.files[`fileUpload${i}`]

        const randStr = Math.random() * 100000
        await fileupload.mv(
          'public/images/comment/' + randStr + fileupload.name
        )
        arrFileNames.push(randStr + fileupload.name)
        i++
      }
      return arrFileNames.join('|')
    }
  } catch (error) {}
}

const deleteImageCommentById = async function (_id) {
  try {
    // danh sách các image cũ
    const arrFileNamesOld = []

    const data = await Product.findOne({ _id: _id })
    data.image.split('|').forEach((item) => arrFileNamesOld.push(item))

    arrFileNamesOld.forEach((item) => {
      fs.unlink('public/images/comment/' + item, () => {})
    })
  } catch (error) {}
}

module.exports = {
  deleteImagePath,

  saveImageProduct,
  saveImageAndDeleteImageProduct,
  deleteImageProduct,
  deleteImageProductById,

  saveImageUser,
  deleteImageUserById,
  saveImageAndDeleteImageUser,

  saveImageBrand,
  deleteImageBrandById,
  saveImageAndDeleteImageBrand,

  saveImageAdvertisement,
  deleteImageAdvertisementById,
  saveImageAndDeleteImageAdvertisement,

  saveImageComment,
  deleteImageCommentById,
}
