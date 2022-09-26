const Phone = require('../database/models/phone')
const PhoneDB = require('../database/Phone')

const getAllPhones = () => {
    try {
        const allPhones = PhoneDB.getAllPhones();
        return allPhones;
    } catch (error) {
        throw error
    }
}

const getOnePhone = (phoneId) => {
    try {
        const phone = PhoneDB.getOnePhone(phoneId);
        return phone;
    } catch (error) {
        throw error
    }
}

const createNewPhone = (phone) => {
    try {
        const newPhone = PhoneDB.createNewPhone(phone)
        return newPhone
    } catch (error) {
        throw error
    }
}

const updateOnePhone = (phoneId, changes) => {
    try {
        const updatedPhone =  PhoneDB.updateOnePhone(phoneId, changes)
        return updatedPhone
    } catch (error) {
        throw error
    }
}

const deleteOnePhone = (phoneId) => {
    try {
        const deletedPhone = PhoneDB.deleteOnePhone(phoneId)
        return deletedPhone
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllPhones,
    getOnePhone,
    createNewPhone,
    updateOnePhone,
    deleteOnePhone
}
