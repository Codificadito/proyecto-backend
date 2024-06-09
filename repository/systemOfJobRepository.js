const User = require('./user')
const conectarDB = require('../db/db');

conectarDB();

exports.getAllUsers = async() => {
    try {
        let usuarios = await User.find();
        return usuarios
    } catch (error) {
        console.log(error)
        
    }
}
exports.addNewUser = async(newUser) => {
    console.log('se llego al repository',newUser)
    
    try {

        return await newUser.save();
    } catch (error) {
        console.error('Error en el repositorio:', error);
        throw error;
    }
  }
exports.deletesystemOfJobRepo = async (id) => {
    let userdelete = await User.findById(id);
    try {
        if (!User) {
            console.log('No existe el usuario')
            return "No se encontro el usuario para eliminar"
        }
        await User.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error)
    }
    
}
exports.putsystemOfJobRepo = () => {

}
