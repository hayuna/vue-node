var express = require('express')
var router = express.Router()
var Room = require('../models/Room.js')

/* GET ALL ROOMS */
router.get('/', async (req, res, next) => {
  try {
    const products = await Room.find()
    res.json(products)
  } catch (err) {
    return next(err)
  }
})

/* GET SINGLE ROOM BY ID */
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Room.findById(req.params.id)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* SAVE ROOM */
router.post('/', async (req, res, next) => {
  try {
    const post = await Room.create(req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* UPDATE ROOM */
router.put('/:id', async (req, res, next) => {
  try {
    const post = await Room.findByIdAndUpdate(req.params.id, req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* DELETE ROOM */
router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Room.findByIdAndRemove(req.params.id, req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

module.exports = router
