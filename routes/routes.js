const express = require('express')
const clienteRoutes = express.Router()
const ClienteController = require('../controllers/ClienteController')
const { upload } = require('../middleware/multer')

clienteRoutes.get('/', ClienteController.view)
clienteRoutes.post('/cliente', upload.single('photo'), ClienteController.create)

module.exports = clienteRoutes;