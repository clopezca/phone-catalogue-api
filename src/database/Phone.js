const DB = require('./models/phone')
const {v4 : uuid} = require('uuid')
const Phone = require('./models/phone')

const getAllPhones = async () => {
    try {
        let allPhones = await DB.find()
        return allPhones
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }    
    }
}

const getOnePhone = async (phoneId) => {
    try {
        let phone = await DB.findOne({id : phoneId})
        if(!phone) {
            throw {
                status: 404,
                message: `Phone not found`,
                };
        }
        return phone
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }    
    }
}

const createNewPhone = async (newPhone) => {
    let phoneStored = new Phone({
        ...newPhone,
        id : uuid(),
        createdAt : new Date().toLocaleString('en-US', {timeZone: 'UTC'}),
        updatedAt : new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    })
    
    try {
        let newPhone = await phoneStored.save()
        return newPhone
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }
    }
}

const updateOnePhone = async (phoneId, changes) => {
    try {
        let updatedPhone = await Phone.findOneAndUpdate({id : phoneId}, changes, {new : true})
        if(!updatedPhone){
            throw {
                status: 400,
                message: `Phone not found`,
            }
        }
        return updatedPhone
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }    
    }
}

const deleteOnePhone = async (phoneId) => {
    try {
        let deletedPhone = await Phone.findOneAndRemove({id : phoneId})
        if(!deletedPhone){
            throw {
                status: 400,
                message: `Phone not found`,
            }
        }
        return deletedPhone
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || error
        }    
    }
}

module.exports = {
    getAllPhones,
    getOnePhone,
    createNewPhone,
    updateOnePhone,
    deleteOnePhone
}