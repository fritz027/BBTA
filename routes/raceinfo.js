const express = require('express')
const { getRaceInfo, getRaceInfos, createRaceInfo }  = require('../controllers/raceinfo')
const router = express.Router()

router.route('/').get(getRaceInfos).post(createRaceInfo)
router.route('/:id').get(getRaceInfo)

module.exports = router;