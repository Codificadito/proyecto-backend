const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORD}@${process.env.DATABASENAME}.dl9ahhf.mongodb.net/?retryWrites=true&w=majority&appName=proyecto`


const conectarDB = async()=>{
    console.log(URI)
    try {
       await mongoose.connect(URI);
       console.log("DB conectada correctamente.") 
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = conectarDB;