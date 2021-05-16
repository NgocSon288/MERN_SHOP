require('dotenv').config()
const mongoose = require('mongoose') // import module vào để sử dụng được

module.exports = {
  connect: async function () {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mertshopdb.mqabj.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
          useCreateIndex: true,
        }
      )

      console.log('successfully!')
    } catch (error) {
      console.log(error.message)
    }
  },
}
    