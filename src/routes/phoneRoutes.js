const express = require('express')
const phoneController = require('../controllers/phoneController')

const router = express.Router();

router
    .get("/", phoneController.getAllPhones)
    .get("/:phoneId", phoneController.getOnePhone)
    .post("/", phoneController.createNewPhone)
    .put("/:phoneId", phoneController.updateOnePhone)
    .delete("/:phoneId", phoneController.deleteOnePhone)

module.exports = router
