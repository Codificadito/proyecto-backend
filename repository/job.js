const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema =  new Schema(
    {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String },
    postedBy: { type: String, ref: 'user', required: true },
    postedAt: { type: Date, default: Date.now },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    company: { type: String, required: true },
    contactEmail: { type: String, required: true }
    }



);




module.exports = mongoose.model('job',jobSchema)
