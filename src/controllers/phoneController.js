const phoneService = require('../services/phoneService')

const getAllPhones = async (req, res) => {
    try {
        const allPhones = await phoneService.getAllPhones()
        
        res.status(200).send({data : allPhones})
    } catch (error) {
        res.status(error?.status || 500).send({status: 'FAILED',  message : error?.message || `Request error: ${error}`})
    }
}

const getOnePhone = async (req, res) => {
    const { params : {phoneId} } = req

    try {
        const phone = await phoneService.getOnePhone(phoneId)
        
        res.status(200).send({data : phone})
    } catch (error) {
        res.status(error?.status || 500).send({status: 'FAILED', message : error?.message || `Request error: ${error}`})

    }
}

const createNewPhone = async (req, res) => {
    const { body } = req

    if (
        Object.keys(body).length === 0 ||
        !body.name ||
        !body.manufacturer ||
        !body.description ||
        !body.color ||
        !body.price ||
        !body.imageFileName ||
        !body.screen ||
        !body.processor ||
        !body.ram) {
        res.status(400).send({status: "FAILED", data: { error: "One of the following keys is missing or is empty in request body: 'name', 'manufacturer', 'description', 'color', 'price', 'imageFileName', 'screen', 'processor', 'ram'"}});
        return
    }
    
    const phoneStored = {
        name : body.name,
        manufacturer : body.manufacturer,
        description : body.description,
        color : body.color,
        price : body.price,
        imageFileName : body.imageFileName,
        screen : body.screen,
        processor : body.processor,
        ram : body.ram
    }

    try {
        const newPhone = await phoneService.createNewPhone(phoneStored)
        
        res.status(201).send({data: newPhone, message : 'The phone has been created successfully'})
    } catch (error) {
        res.status(error?.status || 500).send({status : 'FAILED', message : error?.message || `Error saving phone on DB: ${error}`})
    }
}

const updateOnePhone = async (req, res) => {
    const { params : {phoneId} } = req
    const { body } = req

    try {
        const updatedPhone = await phoneService.updateOnePhone(phoneId, body)
        
        res.status(200).send({data: updatedPhone, message : 'The phone has been updated successfully'})
    } catch (error) {
        res.status(error?.status || 500).send({status : 'FAILED', message : error?.message || `Error updating phone on DB: ${error}`})
    }
}

const deleteOnePhone = async (req, res) => {
    const { params : {phoneId} } = req

    try {
        await phoneService.deleteOnePhone(phoneId)

        res.status(200).send({message : 'The phone has been deleted successfully'})
    } catch (error) {
        res.status(error?.status || 500).send({status : 'FAILED', message : error?.message || `Error deleting phone on DB: ${error}`})
    }
}

module.exports = {
    getAllPhones,
    getOnePhone,
    createNewPhone,
    updateOnePhone,
    deleteOnePhone
}