const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Lecturer = new Schema({
  name: {
    require: true,
    type: String
  },
  job: {
    require: true,
    type: String
  },
  describe: {
    require: false,
    type: String
  },
  img: {
    required: false,
    type: String,
    default: '/lecturers/avatar.svg'
  },
  contact: {
    required: false,

    type: {
      facebook: String,
      twitter: String,
      linkedin: String,
      earth: String
    }
  }
})



mongoose.model('Lecturer', Lecturer)
