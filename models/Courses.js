const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
  img: {
    required: false,
    type: String,
    default: '/Integration_for_courses.png'
  },
  descount: {
    required: false,
    type: Number,
    default: 0
  },
  price: {
    require: true,
    type: Number
  },
  name: {
    require: true,
    type: String
  },
  descriptaion: {
    default: '',
    type: String
  },
  lecturer: {
    require: true,
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})


mongoose.model('Course', Course)
