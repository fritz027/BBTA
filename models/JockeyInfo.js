const mongoose = require('mongoose')

const JockeyInfoSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Id is required'],
        unique: true,
        maxLength: [4, 'Id must not be greater than 4 characters'],
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
        maxLength: [25, 'Name must not be greater than 25 characters'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('JockeyInfo', JockeyInfoSchema)