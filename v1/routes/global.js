const express = require('express');

const router = express.Router();

// Controllers
const GlobalControllers = require('../controllers/global');


/**
 * @swagger
 * components:
 *   schemas:
 *     Credential:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           description: The user's email
 *         username:
 *           type: string
 *           description: the user's username
 *       example:
 *         email: user@email.com
 *         username: Username
 */


 /**
  * @swagger
  * tags:
  *   name: Credentials
  *   description: The credentials managing API
  */

/**
 * @swagger
 * /api/credential/check-country:
 *   get:
 *     summary: Returns the wanted information
 *     tags: [Credentials]
 *     parameters:
 *       - in: query
 *         name: email
 *         type: string
 *         description: The user requested email.
 *     responses:
 *       200:
 *         description: The user information with his country
 *         content:
 *          application/json:
 *           type: object
 */

// Routers
router.get('/check/:credential', GlobalControllers.CheckUserCountry);
router.post('/check-register', GlobalControllers.CheckRegisterUserCountry);
router.post('/create', GlobalControllers.CreateNewUserCredential);
router.get('/', GlobalControllers.GetAllCountries);

module.exports = router;