const express = require('express')
const v1PhonesRouter = require('./v1/routes/phoneRoutes')

const app = express()

app.use(express.json())
app.use('/api/v1/phones', v1PhonesRouter)

module.exports = app
