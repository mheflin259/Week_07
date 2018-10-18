//  Import the express library
const express = require('express')

//  Create an instance of express
const app = express()

//  Declare a port to run on
const port = 3000

//  Declare a route
app.get("/:page", (req, res) => {
  var page = req.params.page
  switch(page) {
    case "home":
      res.send("home")
      break
    case "about":
      res.send("about")
      break
    case "info":
      res.send("info")
      break
    default:
    res.send(req.params.page)
  }
})

//  Start Express Web Server i.e. start listing on the port you defined
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
