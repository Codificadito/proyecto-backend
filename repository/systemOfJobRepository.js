const user = require('./job')
const conectarDB = require('../db/db');

conectarDB()

exports.getsystemOfJobRepo = async() => {
    try {
        let user = await user.find();
        return user
    } catch (error) {
        console.log(error)
        
    }
}
exports.createsystemOfJobRepo = async(usuario) => {
    try {
        let newuser = new user(usuario)
        await newuser.save();
    } catch (error) {
        console.log(error)
    }
}
exports.deletesystemOfJobRepo = async (id) => {
    let userdelete = await user.findById(id);
    try {
        if (!user) {
            console.log('No existe el usuario')
            return "No se encontro el usuario para eliminar"
        }
        await user.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error)
    }
    
}
exports.putsystemOfJobRepo = () => {

}
