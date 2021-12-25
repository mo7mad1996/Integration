const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ideas = new Schema({
  name: {
    require: true,
    type: String
  },
  phone: {
    require: true,
    type: String
  },
  text: {
    require: true,
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})



mongoose.model('Idea', Ideas)
