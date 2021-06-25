const fs = require('fs')

const Advertisement = require('./../models/Advertisement')
const fileHelper = require('./../common/fileuploadHelper')

module.exports = {
  getAll: async function (req, res, next) {
    try {
      const advertisements = [...(await Advertisement.find())].sort(function (
        a,
        b,
      ) {
        return a.displayOrder - b.displayOrder
      })

      return res.json({ success: true, data: advertisements })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  getById: async function (req, res, next) {
    try {
      const { id } = req.params
      const advertisement = await Advertisement.findOne({ _id: id })

      if (!advertisement) {
        res
          .status(400)
          .json({ success: false, message: 'advertisement not found' })
      }

      return res.json({ success: true, data: advertisement })
    } catch (error) {
      res.status(500).json({ success: false, message: error })
    }
  },
  create: async function (req, res, next) {
    try {
      if (req.files) {
        const image = await fileHelper.saveImageAdvertisement(req)

        const { name, description, url, displayOrder } = req.body
        const advertisement = new Advertisement({
          name: name,
          description: description,
          image: image,
          url: url,
          displayOrder: displayOrder,
        })

        const advertisements = await Advertisement.find({})
        advertisements.forEach(async (item) => {
          if (item.displayOrder >= displayOrder) {
            item.displayOrder++
            await item.save()
          }
        })

        await advertisement.save()
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
      await fileHelper.deleteImageAdvertisementById(id)
      const advertisement = await Advertisement.findByIdAndDelete({ _id: id })

      if (!advertisement) {
        return res
          .status(400)
          .json({ success: false, message: 'Advertisement not found' })
      }

      const advertisements = await Advertisement.find({})
      advertisements.forEach(async (item) => {
        if (item.displayOrder > advertisement.displayOrder) {
          item.displayOrder--
          await item.save()
        }
      })

      return res.json({ success: true, message: 'Delete successfully' })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  },
  update: async function (req, res, next) {
    const { id } = req.params
    const advertisement = await Advertisement.findOne({ _id: id })
    let { image, displayOrder: displayOrderOld } = advertisement
    const { name, description, url, displayOrder } = req.body

    try {
      if (req.files) {
        image = await fileHelper.saveImageAndDeleteImageAdvertisement(req)
      }

      const advertisement = await Advertisement.findOne({ _id: id })

      if (!advertisement) {
        return res
          .status(400)
          .json({ success: false, message: 'Advertisement not found' })
      }

      const advertisements = await Advertisement.find({})

      if (displayOrderOld > displayOrder) {
        advertisements.forEach(async (item) => {
          if (
            item.displayOrder >= displayOrder &&
            item.displayOrder < displayOrderOld &&
            item._id !== id
          ) {
            item.displayOrder++
            await item.save()
          }
        })
      } else if (displayOrderOld < displayOrder) {
        advertisements.forEach(async (item) => {
          if (
            item.displayOrder <= displayOrder &&
            item.displayOrder > displayOrderOld &&
            item._id !== id
          ) {
            item.displayOrder--
            await item.save()
          }
        })
      }

      advertisement.image = image
      advertisement.name = name
      advertisement.description = description
      advertisement.url = url
      advertisement.displayOrder = displayOrder

      await advertisement.save()

      return res.json({ success: true, message: 'Update successfully' })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({ success: false, message: error.message })
    }
  },
}
