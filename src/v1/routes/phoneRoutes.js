const express = require('express')
const phoneController = require('../../controllers/phoneController')

const router = express.Router();

router
    .get("/", phoneController.getAllPhones)
    .get("/:phoneId", phoneController.getOnePhone)
    .post("/", phoneController.createNewPhone)
    .put("/:phoneId", phoneController.updateOnePhone)
    .delete("/:phoneId", phoneController.deleteOnePhone)

/**
 * @openapi
 * /api/v1/phones:
 *   get:
 *     tags:
 *       - Phones
 *     summary: Get all phones from catalogue.
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     $ref: '#/components/schemas/Phone'
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /api/v1/phones/{phoneId}:
 *   get:
 *     tags:
 *       - Phones
 *     summary: Get a phone by id.
 *     parameters:
 *       - in: path
 *         name: phoneId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                      id: 
 *                        type: string
 *                        example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *                      name: 
 *                        type: string
 *                        example: iPhone 7  
 *                      manufacturer:
 *                        type: string
 *                        example: Apple
 *                      color:
 *                        type: string
 *                        example: black
 *                      price:
 *                        type: number
 *                        example: 769
 *                      imageFileName:
 *                        type: string
 *                        example: iPhone_7.png
 *                      screen:
 *                        type: string
 *                        example: 4,7 inch IPS
 *                      processor:
 *                        type: string
 *                        example: A10 Fusion
 *                      ram:
 *                        type: number
 *                        example: 2
 *                      createdAt:
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *                      updatedAt: 
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /api/v1/phones:
 *   post:
 *     tags:
 *       - Phones
 *     summary: Creates a new phone.
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Phone' 
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                      id: 
 *                        type: string
 *                        example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *                      name: 
 *                        type: string
 *                        example: iPhone 7  
 *                      manufacturer:
 *                        type: string
 *                        example: Apple
 *                      color:
 *                        type: string
 *                        example: black
 *                      price:
 *                        type: number
 *                        example: 769
 *                      imageFileName:
 *                        type: string
 *                        example: iPhone_7.png
 *                      screen:
 *                        type: string
 *                        example: 4,7 inch IPS
 *                      processor:
 *                        type: string
 *                        example: A10 Fusion
 *                      ram:
 *                        type: number
 *                        example: 2
 *                      createdAt:
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *                      updatedAt: 
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /api/v1/phones/{phoneId}:
 *   put:
 *     tags:
 *       - Phones
 *     summary: Updates a phone finding by Id.
 *     parameters:
 *       - in: path
 *         name: phoneId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Phone' 
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: object
 *                   properties:
 *                      id: 
 *                        type: string
 *                        example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *                      name: 
 *                        type: string
 *                        example: iPhone 7  
 *                      manufacturer:
 *                        type: string
 *                        example: Apple
 *                      color:
 *                        type: string
 *                        example: black
 *                      price:
 *                        type: number
 *                        example: 769
 *                      imageFileName:
 *                        type: string
 *                        example: iPhone_7.png
 *                      screen:
 *                        type: string
 *                        example: 4,7 inch IPS
 *                      processor:
 *                        type: string
 *                        example: A10 Fusion
 *                      ram:
 *                        type: number
 *                        example: 2
 *                      createdAt:
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *                      updatedAt: 
 *                        type: date
 *                        example: 2022-09-26T09:48:23.000Z
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

/**
 * @openapi
 * /api/v1/phones/{phoneId}:
 *   delete:
 *     tags:
 *       - Phones
 *     summary: Delete a phone finding by Id.
 *     parameters:
 *       - in: path
 *         name: phoneId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       5XX:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status: 
 *                   type: string
 *                   example: FAILED
 *                 data:
 *                   type: object
 *                   properties:
 *                     error:
 *                       type: string 
 *                       example: "Some error message"
 */

module.exports = router
