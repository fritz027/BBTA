const mongoose = require('mongoose')

const HorseInfoSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Id is Required!'],
        maxlenght: [10, 'Id number must not be greater then 10 characters'],
        unique: true,
        trim: true,
    },
    name: {
        type: String,
        required: [true, 'Name must be required!'],
        manxlength: [30, 'Name must not be greater than 30 characters!'],
        trim: true,
    },
    sire: {
        type: String,
        required: [true, 'Sire must be required!'],
        maxlenght: [30, 'Sire must not be greater than 30 characters'],
        trim: true,
    },
    dam: {
         type: String,
        required: [true, 'Dam must be required!'],
        maxlenght: [30, 'Dam must not be greater than 30 characters'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'Age must be required!'],
    },
    gender: {
        type: String,
        required: [true, 'Sex must be required'],
        maxlenght: [1, 'Sex must not be greater than 1 character'],
    },
    color: {
        type: String,
        required: [true, 'Color is required!'],
        maxLength: [2, 'Color must not be greater than 2 characters'],
    },
    owner: {
        type: String,
        required: [true, 'Owner must be required!'],
        maxlenght: [30, 'Owner must not be greater than 30 characters'],
        trim: true,
    },
    trainer: {
        type: String,
        required: [true, 'Owner must be required!'],
        maxlenght: [30, 'Owner must not be greater than 30 characters'],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


module.exports =  mongoose.model('HorseInfo', HorseInfoSchema)