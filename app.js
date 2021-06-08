const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const route = require('./route')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(route)

app.listen(port, () => console.log('listening app port ' + port))