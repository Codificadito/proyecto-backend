const express = require('express');
const systemOfJobsRouter = express.Router();
const systemOfJobsController= require('../controllers/systemOfJobsController')
//middleware
systemOfJobsRouter.use(express.json());


////////////////////
// Registro de usuario (POST) -> funciona
systemOfJobsRouter.post('/register', systemOfJobsController.addNewUser);

// Leer todos los datos de usuarios (GET) ->funciona
systemOfJobsRouter.get('/user/', systemOfJobsController.readUsers);

// Actuaizar datos de usuario (GET) -> funciona
systemOfJobsRouter.put('/user/update/:email', systemOfJobsController.updateUser);

// Leer datos de un usuario (GET) ->
systemOfJobsRouter.get('/user/search/:email', systemOfJobsController.getUser);

// Login de usuario (POST)
systemOfJobsRouter.post('/login', systemOfJobsController.verifyLogin);

// Actualizar datos de usuario (PUT)
systemOfJobsRouter.put('/user/:email', systemOfJobsController.updateUser);

// Eliminar usuario (DELETE)
systemOfJobsRouter.delete('/user/:email', systemOfJobsController.deleteUser);

module.exports = systemOfJobsRouter
