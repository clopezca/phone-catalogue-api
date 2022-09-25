const express = require('express')
const mongoose = require('mongoose')

const phoneController = require('./controllers/phoneController')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get("/api/v1/phones", phoneController.getAllPhones)

app.get("/api/v1/phones/:phoneId", phoneController.getOnePhone)

app.post("/api/v1/phones", phoneController.createNewPhone)

app.put("/api/v1/phones/:phoneId", phoneController.updateOnePhone)

app.delete("/api/v1/phones/:phoneId", phoneController.deleteOnePhone)

mongoose.connect('mongodb://localhost:27017/catalogue', (error, res) => {
    if(error){
        console.log(`Error connecting to DB: ${error}`)
    }
    console.log('Connected to DB')

    app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`); 
    })
})

