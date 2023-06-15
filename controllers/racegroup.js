const ErrorResponse = require('../utils/errorResponse')
const asyncHandler = require('../middleware/async')
const RaceGroup = require('../models/RaceGroup')
const _ = require('lodash')

// @description:    Get all Race Group
// @route           GET /api/v1/race/groups
// @access          Public
exports.getRaceGroups = asyncHandler( async (req, res, next) => {
    let query
    
    //copy request query
    const reqQuery = { ...req.query }

    //Fields to select
    const unSelectedFields = ['select', 'sort', 'page', 'limit']

    //remove unselected fields from request query
    unSelectedFields.forEach(param => delete reqQuery[param])
    
    // Create query string
    let queryStr = JSON.stringify(reqQuery)

    //Create operators ($gt, $gte, $lt, $lte etc..)
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte|in)\b/g, match => `$${match}`)

    
    query =  RaceGroup.find(JSON.parse(queryStr))
    // if request query got select
    if (req.query.select){
        const fields = req.query.select.split(',').join(' ')
        query = query.select(fields)
    }

    //if request query got sort
    if(req.query.sort){
        const sortBy = req.query.sort.split(',').join(' ')
        query = query.sort(sortBy)
    } else {
        query = query.sort('ID')
    }

    //pagination 
    const page = parseInt(req.query.page, 10) || 1
    const limit = parseInt(req.query.limit, 10) || 5
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const total = await RaceGroup.countDocuments()

    query = query.skip(startIndex).limit(limit)

    //Execute query
    const raceGroup = await query

    //pagination result
    const pagination = {}

    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit
        }
    } 

    if (startIndex > 0) {
        pagination.prev = {
            page: page -1,
            limit
        }
    }
 
    if (_.isEmpty(raceGroup)) {
    return next(
        new ErrorResponse(`No Data Found`, 404)
    )
    }
    res.status(200).json({
        success: true,
        count: raceGroup.length,
        pagination,
        data: raceGroup,
    })
})

// @decription      Get single Race Information
// @route           GET /api/v1/race/group/:id
// @access          Public
exports.getRaceGroup = asyncHandler( async (req, res, next) => {
    const raceGroup = await RaceGroup.findOne({ID: req.params.id})
    if (_.isEmpty(raceGroup)) {
        return next( 
            new ErrorResponse(`Race group not found with id of test ${req.params.id}`, 404)
        )
    }
    res.status(200).json({
        success: true,
        data: raceGroup,
    })
})

exports.createRaceGroup = asyncHandler( async (req, res, next) => {
    const result = await RaceGroup.create(req.body)
    res.status(201).json({
        success: true,
        data: result
    })
})