const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const config = require('../config')

const options = {
    definition: {
        openapi: '3.0.0',
        info : { title : 'Phone Catalogue', version: '1.0.0'},
    },
    apis : ['src/v1/routes/phoneRoutes.js', 'src/database/Phone.js']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    console.log(`Version 1 Docs are available al http://localhost:${config.PORT}/api/v1/docs`)
}

module.exports = { swaggerDocs }