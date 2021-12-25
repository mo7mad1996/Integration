const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = new Schema({
  username: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
})

mongoose.model('User', Users)
