const errorResponse = require('../utils/errorResponse')
const errorHandler = (err, req, res, next) => {
    //Log error to console on dev
    let error = {...err}
    error.message = err.message

    // console.log(err.stack.red)
    // console.log(err)

    //Mongoose Duplicate Key
    if (err.code === 11000) {
        const message = `${err.keyValue.ID} is already exist`
        error = new errorResponse(message, 400)
    }

    //Mongoose Validation Errors
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new errorResponse(message,404)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    })
}

module.exports = errorHandler