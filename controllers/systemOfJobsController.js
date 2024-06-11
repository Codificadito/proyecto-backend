//CRUD
//Create
//Read
//Update
//Delete
const systemOfJobService = require('../services/systemOfJobService');
const candidate = require('../repository/canditade');
const job = require('../repository/job');
const user = require('../repository/user');

//User
exports.addNewUser = async(req,res) => {
    console.log('llegamos a controllers')
    try {
        const savedUser = await systemOfJobService.addNewUser(req);
        res.status(201).json({ message: 'Usuario registrado correctamente', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar el user', error });
    }
};

exports.readUsers = async (req,res) => {
    try {
        let = usuarios = await systemOfJobService.readUser();
        res.status(200).send(usuarios)
    } catch (error) {
        console.log(error);
        res.status(500).send("error para obtener todos los usuarios")
    }
};
exports.getUser = async (req, res) => {
    try {
        const email = req.params.email;
        const usuario = await systemOfJobService.getUser(email);
        if (!usuario) {
            return res.status(404).json({ message: 'Error: el usuario no existe' });
        }
        return res.status(200).json(usuario);
    } catch (error) {
        console.error('Error en el controlador al recuperar el usuario:', error);
        return res.status(500).json({ message: 'Error al recuperar el usuario', error });
    }
};

exports.updateUser = async(req,res) => {
    try {
        const savedUser = await systemOfJobService.updateUser(req,res);
        return res.status(200).json({ message: 'Usuario Actualizado correctamente', user: savedUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};


exports.verifyLogin = () => {};

exports.deleteUser = () => {};


//trabajos

