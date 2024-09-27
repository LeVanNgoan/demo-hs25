require('dotenv').config();
const express = require('express')
const path = require('path')
const configViewEngine = require('./config/viewEngine.js')
const webRoutes = require('./routes/web.js')
const connection = require('./config/database.js')

const app = express()
const port = process.env.PORT || 3000
const hostname = process.env.HOST_NAME

configViewEngine(app)
app.use(webRoutes)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})