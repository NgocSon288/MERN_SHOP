const fs = require('fs')

const Product = require('./../models/Product')

const saveImageImageProduct = async function (req) {
  if (req.files) {
    // danh sách các image mới
    const arrFileNames = []

    let i = 1
    while (req.files[`fileUpload${i}`]) {
      const fileupload = req.files[`fileUpload${i}`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/' + randStr + fileupload.name)
      arrFileNames.push(randStr + fileupload.name)
      i++
    }
    return arrFileNames.join('|')
  }
}

const saveImageAndDeleteImageProduct = async function (req) {
  if (req.files) {
    // danh sách các image cũ
    const { _id } = req.body
    const arrFileNamesOld = []
    // danh sách các image mới
    const arrFileNames = [];
    if(req.body.image){
        arrFileNames.push([...req.body.image.split('|')]);
    }

    const data = await Product.findOne({ _id: _id })
    data.image.split('|').forEach((item) => arrFileNamesOld.push(item))

    let i = 1
    while (req.files[`fileUpload${i}`]) {
      const fileupload = req.files[`fileUpload${i}`]

      const randStr = Math.random() * 100000
      await fileupload.mv('public/images/' + randStr + fileupload.name)
      arrFileNames.push(randStr + fileupload.name)
      i++
    }
 
    arrFileNamesOld.forEach((item) => {
      const check = arrFileNames.indexOf(item) !== -1

      if (!check) {
        fs.unlink('public/images/' + item, () => {})
      }
    })

    return arrFileNames.join('|')
  }
}

const deleteImageProduct = async function (req) {
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
      fs.unlink('public/images/' + item, () => {})
    }
  })

  return arrFileNames.join('|')
}

const deleteImageProductById = async function (_id) {
  // danh sách các image cũ
  const arrFileNamesOld = []

  const data = await Product.findOne({ _id: _id }) 
  data.image.split('|').forEach((item) => arrFileNamesOld.push(item))
  
  arrFileNamesOld.forEach((item) => {
    fs.unlink('public/images/' + item, () => {})
  })
}

module.exports = {
  saveImageImageProduct,
  saveImageAndDeleteImageProduct,
  deleteImageProduct,
  deleteImageProductById,
}
