const express = require('express')
const cors = require('cors')
const v1PhonesRouter = require('./v1/routes/phoneRoutes')

const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
}

const configuredCors = cors(corsOptions);

app.options('*', configuredCors)

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    next();
});

app.use('/api/v1/phones', v1PhonesRouter)

module.exports = app
