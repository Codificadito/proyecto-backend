
const systemOfJobRepository = require('../repository/systemOfJobRepository')
const user = require('../repository/user')

exports.getUser = async (email) => {
    try {
        return await systemOfJobRepository.getUserByEmail(email);
    } catch (error) {
        console.error('Error en el servicio al obtener el usuario:', error);
        throw error;
    }
};


exports.readUser = () => {
    try {
        return systemOfJobRepository.getAllUsers();
    } catch (error) {
        console.log(error);
    }
}

exports.addNewUser =async (req) => {
    const { email, username, password, role, companyDetails } = req.body;
    console.log(req.body);

    try {
        
        // Crear un nuevo usuario
        const newUser = new user({
            email,
            username,
            password,
            role,
            companyDetails
        });

        return systemOfJobRepository.addNewUser(newUser);
    } catch (error) {
        console.error('Error en el servicio:', error);
        throw error;
    }
}

exports.updateUser =async (req,res) => {
    
    try {
        const { email, username, password, role, companyDetails } = req.body;
        const correo = req.params.email;

        let usuario = await user.findOne({ email: correo });
        //Poner un condicional para detectar si se tiene el mismo correo ya registrado
        if (!usuario) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        if (email) usuario.email = email;
        if (username) usuario.username = username;
        if (password) usuario.password = password;
        if (role) usuario.role = role;
        if (companyDetails) usuario.companyDetails = companyDetails;

        return systemOfJobRepository.updateUser(usuario);
    } catch (error) {
        console.error('Error actualizando el usuario:', error);
        return res.status(500).json({ message: 'Error actualizando el usuario', error });
    }
}

exports.deleteOneUser = async(email)=>{
    try {
        await systemOfJobRepository.deleteOneUser(email)
    } catch (error) {
        return res.status(500).json({ message: 'Error actualizando el usuario', error });
    }
}

exports.loginUser = async (email, password) => {
    try {
        const user = await systemOfJobRepository.getUserByEmail(email);
        if (!user) {
            return { success: false, message: 'Usuario no encontrado' };
        }

        if (password != user.password) {
            return { success: false, message: 'Contraseña incorrecta o email incorrectos' };
        }

        return { success: true, message: 'Login exitoso', user };
    } catch (error) {
        console.error('Error en el servicio al iniciar sesión:', error);
        throw error;
    }
};