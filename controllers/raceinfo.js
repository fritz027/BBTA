const RaceInfo = require('../models/RaceInfo')

// @description:    Get all Race Information
// @route           GET /api/v1/race/info/
// @access          Public
exports.getRaceInfos = async (req, res, next) => {
    try {
        const raceInfo = await RaceInfo.find()
        
        res.status(200).json({
            success: true,
            dataLength: raceInfo.length,
            data: raceInfo
        })
    } catch (error) {
        res.status(400).json({success: false, error: error})
    }
}

// @decription      Get single Race Information
// @route           GET /api/v1/race/info/:id
// @access          Public
exports.getRaceInfo = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show race information ${req.params.id}`})
}


// @description     Create Race info 
// @route           POST /api/v1/race/info
// @router          private
exports.createRaceInfo = async (req, res, next) => {
   const result = await RaceInfo.create(req.body)
   res.status(201).json({
    success: true,
    data: result
   })
}