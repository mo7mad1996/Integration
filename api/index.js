const fs = require('fs')

export default function (req, res, next) {
  var db = JSON.parse(fs.readFileSync(__dirname + '/db.json', 'utf-8'))
  // req is the Node.js http request object
  // console.log(req.url)

  var query = req._parsedUrl.query ? req._parsedUrl.query.split('&') : [],
    final = query.map((q) => q.split('=')),
    sub = req._parsedUrl.pathname.split('/')

  /*
    [
      ['',''],
      ['','']
    ]
  */

  var toClient = db[sub[2]] || db

  for (const [k, v] of final) {
    toClient = toClient.filter((item) => item[k] == v)
  }

  res.setHeader('Content-Type', 'application/json ')
  res.end(JSON.stringify(toClient))

  // res is the Node.js http response object

  // next is a function to call to invoke the next middleware
  // Don't forget to call next at the end if your middleware is not an endpoint!
  next()
}
