const express = require('express')
const mongoose = require('mongoose')


const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.get("/api/v1/phones", (req, res) => {
    res.status(200).send({phones: []})
})

app.get("/api/v1/phones/:phoneId", (req, res) => {
})

app.post("/api/v1/phones", (req, res) => {
    console.log(req.body)
    res.status(200).send({message : 'The phone has been created successfully'})
})

app.put("/api/v1/phones/:phoneId", (req, res) => {
})

app.delete("/api/v1/phones/:phoneId", (req, res) => {
})

mongoose.connect('mongodb://localhost:27017/catalogue', (error, res) => {
    if(error){
        console.log(`Error connecting to DB: ${error}`)
    }
    console.log('Connected to DB')

    app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`); 
    })
})

