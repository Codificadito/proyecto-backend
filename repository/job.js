const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
    {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String },
    postedBy: { type: String, ref: 'User', required: true },
    postedAt: { type: Date, default: Date.now },
    company: { type: String, required: true },
    contactEmail: { type: String, required: true }
    }



);




module.exports = mongoose.model('job',jobSchema)
