const mongoose = require('mongoose')

const RaceGroupSchema = new mongoose.Schema({
    code: {
        type: String,
        unique: true,
        trim: true,
        maxLength: [10, 'Id must not be greater than 10 characters'],
        required: [true, 'Id must be required!'],
    },
    description: {
        type: String,
        trim: true,
        maxLength: [100, 'Description must not be greater than 100 characters'],
        required: [true, 'Description is required!'],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('RaceGroup', RaceGroupSchema)