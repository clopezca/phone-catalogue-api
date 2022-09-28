const mongoose = require('mongoose')
const app = require('./app') 
const config = require('./config')
const { swaggerDocs: V1SwaggerDocs } = require('./v1/swagger')

mongoose.connect(config.DB, (error, res) => {
    if(error){
        console.log(`Error connecting to DB: ${error}`)
    }
    console.log('Connected to DB')

    app.listen(config.PORT, () => {
        console.log(`API is listening on port ${config.PORT}`); 
        V1SwaggerDocs(app, config.PORT)
    })
})

