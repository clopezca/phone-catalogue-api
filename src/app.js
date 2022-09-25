const express = require('express')
const app = express()

const phoneController = require('./controllers/phoneController')

app.use(express.json())

app.get("/api/v1/phones", phoneController.getAllPhones)
app.get("/api/v1/phones/:phoneId", phoneController.getOnePhone)
app.post("/api/v1/phones", phoneController.createNewPhone)
app.put("/api/v1/phones/:phoneId", phoneController.updateOnePhone)
app.delete("/api/v1/phones/:phoneId", phoneController.deleteOnePhone)

module.exports = app