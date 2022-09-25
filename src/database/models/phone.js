const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PhoneSchema = Schema({
    id: String,
    name: String,
    manufacturer: String,
    description: String,
    color: String,
    price: Number,
    imageFileName: String,
    screen: String,
    processor: String,
    ram: Number
})

module.exports = mongoose.model('Phone', PhoneSchema)