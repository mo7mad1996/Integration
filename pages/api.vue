<script>
export default {
  asyncData({ req, res }) {
    if (process.server) {
      const fs = require('fs')
      var db = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
      var query = req._parsedUrl.query ? req._parsedUrl.query.split('&') : [],
        final = query.map((q) => q.split('=')),
        sub = req._parsedUrl.pathname.split('/'),
        id = sub[3]
      var toClient = db[sub[2]] || db
      for (const [k, v] of final) {
        toClient = toClient.filter((item) => item[k] == v)
      }
      if (id) {
        toClient = toClient.filter((el) => el.id == id)
      }
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify(toClient))
    }
  },
}
</script>
