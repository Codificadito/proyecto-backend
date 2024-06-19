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
    try {
        const savedUser = await systemOfJobService.addNewUser(req);
        res.status(200).json({ message: 'Usuario registrado correctamente', user: savedUser });
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
    console.log(req)
    try {
        let savedUser = await systemOfJobService.updateUser(req,res);
        return res.status(200).json({ message: 'Usuario Actualizado correctamente', user: savedUser });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};



exports.deleteUser = async(req,res) => {
    try {
        let userdeled = await systemOfJobService.deleteOneUser(req.params.email);
        return res.status(200).json({message: 'Usuario eliminado correctamente', user:userdeled})
    } catch (error) {
        return res.status(500).json({message: 'Error al eliminar el usuario'})
    }
};


exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await systemOfJobService.loginUser(email, password);
        if (!result.success) {
            return res.status(400).json({ message: result.message });
        }

        return res.status(200).json({ message: result.message, user: result.user });
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        return res.status(500).json({ message: 'Error al iniciar sesión', error });
    }
};

//trabajos

