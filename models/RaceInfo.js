const mongoose = require('mongoose')

const RaceInfoSchema = new mongoose.Schema({
    raceId: {
        type: String,
        required: [true, 'Race id must not be null'],
        unique: true,
        trim: true,
        maxlength: [20],
    },
    previousRaceGroup: {
        type: String,
        required: [true, 'Previous race group is required!'],
        maxlength: [20],
        trim: true
    },
    currentRaceGroup: {
        type: String,
        required: [true, 'Current race group is required!'],
        maxlength: [20],
        trim: true,
    },
    jockeyName: {
        type: String,
        required: [true, 'Jockey name is required!'],
        maxlength: [50],
        trim: true,
    },
    jockeyWeight: {
        type: Number,
        required: [true, 'Jockey weight is required!'],
    },
    horseWeight: {
        type: Number,
    },
    numberOfRunners: {
        type: Number,
    },
    placement: {
        type: Number,
        required: [true, 'Placement is required!'],
    },
    raceTrack: {
        type: String,
        required: [true, 'RaceTrack is required!'],
        maxlength: [50],
        trim: true,
    },
    trackCondition: {
        type: String,
        required: [true, 'Track condition is required!'],
        maxlength: [30],
        trim: true,
    },
    distance: {
        type: Number,
        required: [true, 'Distance is required!'],
    },
    pacing: {
        type: String,
        required: [true, 'Pacing is required!'],
        maxlength: [20],
        trim: true,
    },
    quarterTimes: {
        type: String,
        required: [true, 'Quarter time is required!'],
        maxlength: [30],
        trim: true,
    },
    finalTime: {
        type: Number,
        required: [true, 'Final time is required!'],
    },
    lengthFinished: {
        type: Number,
        required: [true, 'Length finished is required!'],
    },
    daySinceLastRace: {
        type: Number,
        required: [true, 'Days since last race is required!'],
    },
    horseJockeyWinPercent: {
        type: Number,
        required: [true, 'Horse jockey win percentage is required!'],
    },
    dayWinPercentage: {
        type: Number,
        required: [true, 'Day win percentage is required!'],
    },
    nightWinPercentage: {
        type: Number,
        required: [true, 'Night win percentage is required!'],
    },
    trackConditionGTWinPercentage: {
        type: Number,
        required: [true, 'Track condition win percentage GT is required!'],
    },
    trackConditionMTWinPercentage: {
        type: Number,
        required: [true, 'Track condition win percentage MT is required!'],
    },
    contenders: {
        type: String,
        required: [true, 'Contenders is required!'],
        maxlength: [30],
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    horseInfo: {
        type: mongoose.Schema.ObjectId,
        ref: 'HorseInfo',
        require: true
    }

})

module.exports = mongoose.model('RaceInfo', RaceInfoSchema)