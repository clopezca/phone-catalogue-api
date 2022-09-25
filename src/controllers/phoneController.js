const Phone = require('../database/models/phone')

const getAllPhones = (req, res) => {
    Phone.find({}, (error, phones) => {
        if(error) return res.status(500).send({message : `Request error: ${error}`})
        if(!phones) return res.status(404).send({message : `Phones not found`})

        res.status(200).send({phones})
    })
}

const getOnePhone = (req, res) => {
    const phoneId = req.params.phoneId

    Phone.findById(phoneId, (error, phone) => {
        if(error) return res.status(500).send({message : `Request error: ${error}`})
        if(!phone) return res.status(404).send({message : `Phone not found`})

        res.status(200).send({phone})
    })
}

const createNewPhone = (req, res) => {
    const { body } = req
    
    let phone = new Phone()
    phone.name = body.name
    phone.manufacturer = body.manufacturer
    phone.description = body.description
    phone.color = body.color
    phone.price = body.price
    phone.imageFileName = body.imageFileName
    phone.screen = body.screen
    phone.processor = body.processor
    phone.ram = body.ram

    phone.save((error, phoneStored) => {
        if(error) res.status(500).send({message: `Error saving phone on DB: ${error}`})
        
        res.status(200).send({phone: phoneStored, message : 'The phone has been created successfully'})
    })
}

const updateOnePhone = (req, res) => {
    const phoneId = req.params.phoneId
    const fieldsToUpdate = req.body

    Phone.findByIdAndUpdate(phoneId, fieldsToUpdate, {new: true}, (error, phoneUpdated) => {
        if(error) return res.status(500).send({message : `Request error: ${error}`})
        if(!phoneUpdated) return res.status(404).send({message : `Phone not found`})

        res.status(200).send({phone: phoneUpdated, message : 'The phone has been updated successfully'})
    })
}

const deleteOnePhone = (req, res) => {
    const phoneId = req.params.phoneId

    Phone.findById(phoneId, (error, phone) => {
        if(error) return res.status(500).send({message : `Request error: ${error}`})
        if(!phone) return res.status(404).send({message : `Phone not found`})

        phone.remove(error => {
            if(error) return res.status(500).send({message : `Error deleting phone: ${error}`})

            res.status(200).send({message: "Phone deleted successfully"})
        })
    })
}

module.exports = {
    getAllPhones,
    getOnePhone,
    createNewPhone,
    updateOnePhone,
    deleteOnePhone
}