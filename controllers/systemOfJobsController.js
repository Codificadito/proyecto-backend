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
exports.addNewUser = () => {};
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
exports.verifyLogin = () => {};
exports.updateUser = () => {};
exports.deleteUser = () => {};


//trabajos

