const express = require('express')
const consola = require('consola')
const {
  Nuxt,
  Builder,
  loadNuxt
} = require('nuxt')
const app = express()

const config = require('../nuxt.config')
config.dev = process.dev !== 'production'



// database
const mongoose = require('mongoose'),
  db_uri = config.dev ? 'mongodb://localhost/Integration' : ''


mongoose.Promise = global.Promise
mongoose.connect(db_uri)
  .then(() => consola.log('connected to db'))
  .catch(err => {
    if (err) {
      throw err
    }
  })

// load User model
require('../models/User')
const User = mongoose.model('User')
User.find({}).then(data => {
  if (!data.length) {
    let newUser = new User({
      username: 'admin',
      password: 'admin'
    })

    newUser.save()
  }
})


// use body-parser middleware
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())



process.env.DEBUG = 'nuxt:*'

async function start() {
  // const nuxt = new Nuxt(config)
  const nuxt = await loadNuxt(config.dev ? 'dev' : 'start')

  const api = require("./api/index")
  app.use('/api', api)


  app.use(nuxt.render)

  const {
    port,
    host
  } = nuxt.options.server





  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.listen(port, host)

  consola.ready({
    message: `http://${host}:${port}`,
    badge: true
  })
}

start()
