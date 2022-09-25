const mongoose = require('mongoose')
const app = require('./app')
const PORT = process.env.PORT || 3001

mongoose.connect('mongodb://localhost:27017/catalogue', (error, res) => {
    if(error){
        console.log(`Error connecting to DB: ${error}`)
    }
    console.log('Connected to DB')

    app.listen(PORT, () => {
        console.log(`API is listening on port ${PORT}`); 
    })
})
