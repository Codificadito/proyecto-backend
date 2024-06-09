
const systemOfJobRepository = require('../repository/systemOfJobRepository')
const user = require('../repository/user')

exports.getUser = () => {
    try {
        return user.getAllUsers();
    } catch (error) {
        console.log(error);
    }
}

exports.readUser = () => {
    try {
        return systemOfJobRepository.getAllUsers();
    } catch (error) {
        console.log(error);
    }
}

exports.addNewUser =async (req) => {
    console.log('Llegó al servicio');
    const { email, username, password, role, companyDetails } = req.body;
    console.log(email, username, password, role, companyDetails);
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