const express = require('express')
const dotenv = require('dotenv')
const logger = require('./middleware/logger')
const morgan = require('morgan')
const colors = require('colors')
const errorHandler = require('./middleware/error')
const connectDB = require('./config/db')


//Routes files
const raceInfo = require('./routes/raceinfo')
const raceGroup = require('./routes/racegroup')

//load env vars
dotenv.config({ path: './config/config.env' })

//Connect to Database
connectDB()

const app = express()

// Body Parser
app.use(express.json())

// Dev Logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
//Mount Routes

app.use('/api/v1/race/info', raceInfo)
app.use('/api/v1/race/group', raceGroup)

app.use(errorHandler)

const PORT = process.env.PORT || 8000

const server = app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold)
    //Close Server Exit Process
    server.close(() => process.exit(1))
})