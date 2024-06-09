const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },  
    role: { type: String, enum: ['company', 'candidate'], required: true },
    createdAt: { type: Date, default: Date.now },
    companyDetails: {
        name: { type: String },
        address: { type: String },
        website: { type: String }
    }
});


module.exports = mongoose.model('User',userSchema)