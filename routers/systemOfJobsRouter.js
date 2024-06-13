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

// Eliminar usuario (DELETE) -> funciona
systemOfJobsRouter.delete('/user/delete/:email', systemOfJobsController.deleteUser);

// Leer datos de un usuario (GET) -> funciona
systemOfJobsRouter.get('/user/search/:email', systemOfJobsController.getUser);

// Login 
systemOfJobsRouter.post('/login',systemOfJobsController.loginUser)

//////Publicar un trabajo

// Actualizar datos de usuario (PUT)
systemOfJobsRouter.put('/user/:email', systemOfJobsController.updateUser);



module.exports = systemOfJobsRouter
