const express = require("express")
const next = require("next")
const URI = require("urijs")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"
const app = next({ dir: "./src", dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()
  server.use(function(req, res, next) {
    if (req.url.indexOf("/_next/") === -1) {
      const search = {}
      const urlSegments = req.url.split("/").map((segment) => {
        if (!(/^\d+$/).test(segment)) return segment
        const searchLength = Object.keys(search).length
        const paramNumber = searchLength === 0 ? "" : searchLength + 1
        search[`param${paramNumber}`] = segment
        return `$param`
      })
      req.url = new URI(urlSegments.join("/")).addSearch(search).toString() 
    }
    next()
  })

  server.get("*", (req, res) => (handle(req, res)))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
