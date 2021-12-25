const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Ticket = new Schema({
  name: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String
  },
  phone: {
    require: true,
    type: String
  },
  course_id: {
    require: true,
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})


mongoose.model('Ticket', Ticket)
