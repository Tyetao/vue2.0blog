const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
const port = 8888

app.use(history())
// app.use('/node_modules', express.static('node_modules'));
app.use(express.static('../dist'))

app.listen(port)
console.log(`localhost:${port}`)
