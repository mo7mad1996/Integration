const express = require('express')
const router = express.Router()

console.clear()
// database
const mongoose = require('mongoose')

router.get('/courses', (req, res) => {

  require('../../models/Courses')
  const Course = mongoose.model('Course')

  Course.find({}).sort({
      date: 'desc'
    })
    .then(courses => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(courses))
    })
    .then(err => {
      throw err
    })
})
router.get('/courses/:id', (req, res) => {

  require('../../models/Courses')
  const Course = mongoose.model('Course')

  Course.findOne({
      _id: req.params.id
    })
    .then(courses => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(courses))
    })
    .then(err => {
      throw err
    })
})
router.post('/courses', (req, res) => {

  // Load course modle
  require('../../models/Courses')
  const Course = mongoose.model('Course')

  const newCourse = new Course(req.body)


  newCourse.save()
    .then(course => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(course))
    })
    .then(err => {
      throw err
    })
})
router.delete('/courses/:id', (req, res) => {
  // Load course modle
  require('../../models/Courses')
  const Course = mongoose.model('Course')

  Course.remove({
      _id: req.params.id
    })
    .then(course => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(course))
    })
    .then(err => {
      throw err
    })
})

router.get('/lecturers', (req, res) => {

  // Load course modle
  require('../../models/Lecturers')
  const Lecturer = mongoose.model('Lecturer')

  Lecturer.find({})
    .then(lecturers => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(lecturers))
    })
    .then(err => {
      throw err
    })
})
router.post('/lecturers', (req, res) => {

  require('../../models/Lecturers')
  const Lecturer = mongoose.model('Lecturer'),
    newLecturer = new Lecturer(req.body)

  newLecturer.save()
    .then(lecturer => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(lecturer))
    })
    .catch(err => console.log(err))
})
router.delete('/lecturers/:id', (req, res) => {
  require('../../models/Lecturers')
  const Lecturer = mongoose.model('Lecturer')

  Lecturer.remove({
      _id: req.params.id
    })
    .then(lecturer => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(lecturer))
    })
    .then(err => {
      throw err
    })
})

router.get('/admins', (req, res) => {


  // Load course modle
  require('../../models/User')
  const User = mongoose.model('User')

  User.find(req.query)
    .then(users => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(users))
    })
    .then(err => {
      throw err
    })
})
router.patch('/admins/:id', (req, res) => {
  require('../../models/User')
  const User = mongoose.model('User')

  User.findById(req.params.id)
    .then(user => {

      newdata = new User(Object.assign(user, req.body))
      newdata.save()
        .then((user) => {
          res.writeHead(200, {
            'content-type': 'application/json'
          })
          res.end(JSON.stringify(user))
        })
    })
    .catch(err => console.log(err))
})

router.get('/ideas', (req, res) => {
  require('../../models/idea')
  const Idea = mongoose.model('Idea')

  Idea.find({}).sort({
      date: 'desc'
    })
    .then(idea => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(idea))
    })
    .catch(err => console.log(err))
})
router.post('/ideas', (req, res) => {
  require('../../models/idea')
  const Idea = mongoose.model('Idea'),
    newIdea = new Idea(req.body)

  newIdea.save()
    .then(idea => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(idea))
    })
    .catch(err => console.log(err))
})
router.delete('/ideas/:id', (req, res) => {
  require('../../models/idea')
  const Idea = mongoose.model('Idea')

  Idea.remove({
      _id: req.params.id
    })
    .then(idea => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(idea))
    })
    .catch(err => {
      if (err) {
        throw err
      }
    })

})

router.get('/tickets', (req, res) => {
  require('../../models/Ticket')
  const Ticket = mongoose.model('Ticket')

  Ticket.find({}).sort({
      date: 'desc'
    })
    .then(tickets => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(tickets))
    })
    .catch(err => console.log(err))

})
router.post('/tickets', (req, res) => {
  require('../../models/Ticket')
  const Ticket = mongoose.model('Ticket'),
    newTicket = new Ticket(req.body)

  newTicket.save()
    .then(ticket => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(ticket))
    })
    .catch(err => console.log(err))

})
router.delete('/tickets/:id', (req, res) => {
  require('../../models/Ticket')
  const Ticket = mongoose.model('Ticket')

  Ticket.remove({
      _id: req.params.id
    })
    .then(ticket => {
      res.writeHead(200, {
        'content-type': 'application/json'
      })
      res.end(JSON.stringify(ticket))
    })
    .catch(err => console.log(err))

})



module.exports = router
