const mongoose = require('mongoose');
const Schema = mongoose.Schema


const candidateSchema = new Schema({
    name: { type: String, required: true },
    education: { type: String, required: true },
    skills: { type: String, required: true },
    experience: { type: String },
    contact: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});






module.exports = mongoose.model('candidate',candidateSchema)
