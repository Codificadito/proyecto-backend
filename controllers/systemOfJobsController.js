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
exports.getUser = async(req,res)=>{
    try {
        let usuario = await user.findById(req.params.id);
        if (!usuario) {
            return res.status(404).json("No existe el usuario")
        }
        res.status(200).json(usuario)
    } catch (error) {
        console.error(error);
        res.status(500).json("Error al recuperar el usuario")
    }
};

exports.updateUser = async(req,res) => {
    try {
        const savedUser = await systemOfJobService.updateUser(req);
        res.status(201).json({ message: 'Usuario Actualizado correctamente', user: savedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
    }
};


exports.verifyLogin = () => {};

exports.deleteUser = () => {};


//trabajos

