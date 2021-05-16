const mongoose = require('mongoose') // import module vào để sử dụng được

module.exports = {
  connect: async function () {
    try {
      await mongoose.connect('mongodb://localhost/demo-shopping', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
      })

      console.log('successfully!')
    } catch (error) {
      console.log('Error')
    }
  },
}
