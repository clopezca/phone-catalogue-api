const Phone = require('./models/phone')
const {v4 : uuid} = require('uuid')

/**
 * @openapi
 * components:
 *   schemas:
 *     Phone:
 *       type: object
 *       properties:
 *         id: 
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name: 
 *           type: string
 *           example: iPhone 7  
 *         manufacturer:
 *           type: string
 *           example: Apple
 *         color:
 *           type: string
 *           example: black
 *         price:
 *           type: number
 *           example: 769
 *         imageFileName:
 *           type: string
 *           example: iPhone_7.png
 *         screen:
 *           type: string
 *           example: 4,7 inch IPS
 *         processor:
 *           type: string
 *           example: A10 Fusion
 *         ram:
 *           type: number
 *           example: 2
 *         createdAt:
 *           type: date
 *           example: 2022-09-26T09:48:23.000Z
 *         updatedAt: 
 *           type: date
 *           example: 2022-09-26T09:48:23.000Z
 */

const getAllPhones = async () => {
    try {
        const allPhones = await Phone.find({})
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
        const phone = await Phone.findOne({id : phoneId})
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
    const phoneStored = {
        ...newPhone,
        id : uuid(),
        createdAt : new Date().toLocaleString('en-US', {timeZone: 'UTC'}),
        updatedAt : new Date().toLocaleString('en-US', {timeZone: 'UTC'})
    }
    
    try {
        const newPhone = await Phone.create(phoneStored)
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
        const updatedPhone = await Phone.findOneAndUpdate({id : phoneId}, changes, {new : true})
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
        const deletedPhone = await Phone.findOneAndRemove({id : phoneId})
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