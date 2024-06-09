const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },  
    role: { type: String, enum: ['company', 'candidate'], required: true },
    createdAt: { type: Date, default: Date.now },
    companyDetails: {
        name: { type: String },
        address: { type: String },
        website: { type: String }
    }
});


module.exports = mongoose.model('user',userSchema)