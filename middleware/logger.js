// @description log request to console
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`, {
        useCreateIndex: true
    })
    next()
}

module.exports = logger