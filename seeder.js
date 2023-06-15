const fs = require('fs')
const mongoose = require('mongoose')
const color = require('colors')
const dotenv = require('dotenv')

//Load env vars
dotenv.config({path: './config/config.env'})

const RaceGroup = require('./models/RaceGroup')

mongoose.connect(process.env.MONGO_URI)


//Read json Files
const raceGroups = JSON.parse(fs.readFileSync(`${__dirname}/_data/racegroups.json`, 'utf-8'))


//Import data into DB
const importData = async () => {
    try {
        await RaceGroup.create(raceGroups)

        console.log('Data Imported Successfully...'.green.inverse)
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

const deleteData = async () => {
    try {
        await RaceGroup.deleteMany()
        
        console.log('Data Destroyed Successfully...'.red.inverse)
        process.exit()
    } catch (err) {
        console.log(err)
        process.exit()
    }
}

if (process.argv[2] === '-i') {
    importData()
} else if (process.argv[2] === '-d') {
    deleteData()
}