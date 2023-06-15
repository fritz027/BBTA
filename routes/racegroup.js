const express = require('express')
const { createRaceGroup, getRaceGroup ,getRaceGroups }  = require('../controllers/racegroup')
const router = express.Router()

router.route('/')
    .get(getRaceGroups)
    .post(createRaceGroup)

router.route('/:id')
    .get(getRaceGroup)

module.exports = router;