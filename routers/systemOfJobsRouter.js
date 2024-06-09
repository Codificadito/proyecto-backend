const express = require('express');
const systemOfJobsRouter = express.Router();
const systemOfJobsController= require('../controllers/systemOfJobsController')
//middleware
systemOfJobsRouter.use(express.json());


////////////////////
// Registro de usuario (POST)
systemOfJobsRouter.post('/register', systemOfJobsController.addNewUser);

// Leer datos de usuario (GET)
systemOfJobsRouter.get('/user/:id', systemOfJobsController.getUser);

// Login de usuario (POST)
systemOfJobsRouter.post('/login', systemOfJobsController.verifyLogin);

// Actualizar datos de usuario (PUT)
systemOfJobsRouter.put('/user/:email', systemOfJobsController.updateUser);

// Eliminar usuario (DELETE)
systemOfJobsRouter.delete('/user/:email', systemOfJobsController.deleteUser);

module.exports = systemOfJobsRouter
