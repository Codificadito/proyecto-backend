const mongoose = require('mongoose');


const candidateSchema = mongoose.Schema({
    name: { type: String, required: true },
    education: { type: String, required: true },
    skills: { type: String, required: true },
    experience: { type: String },
    contact: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String, ref: 'User', required: true }
});






module.exports = mongoose.model('candidate',candidateSchema)
