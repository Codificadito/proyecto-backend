const conectarDB = require('../db/db');
const user = require('./user');
const { json } = require('express');

conectarDB();

exports.getAllUsers = async() => {
    try {
        let usuarios = await user.find();
        return usuarios
    } catch (error) {
        console.log(error)
        
    }
}

exports.getUserByEmail = async (email) => {
    try {
        usuario = await user.findOne({ email: email });
        return usuario
    } catch (error) {
        console.error('Error en el repositorio al obtener el usuario:', error);
        throw error;
    }
};

exports.addNewUser = async(newUser) => {
    
    try {

        return await newUser.save();
    } catch (error) {
        console.error('Error en el repositorio:', error);
        throw error;
    }
  }
exports.deletesystemOfJobRepo = async (id) => {
    let userdelete = await user.findById(id);
    try {
        if (!User) {
            console.log('No existe el usuario')
            return "No se encontro el usuario para eliminar"
        }
        await User.findOneAndDelete({_id:id});
    } catch (error) {
        console.log(error);
    }
    
}
exports.updateUser = async (usuario) => {
    try {
        await usuario.save();
    } catch (error) {
        console.log(error);
    }
}

exports.deleteOneUser = async (email) => {
    try {
        const usuario = await user.findOne({ email: email });
        if (!usuario) {
            console.log('No existe el usuario ingresado');
            return 'No existe el usuario ingresado';
        }
        await user.findOneAndDelete({ email: email });
        return 'Usuario eliminado con éxito';
    } catch (error) {
        console.error('Error en el repositorio al eliminar el usuario:', error);
        throw error;
    }
};