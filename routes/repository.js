const express = require('express')
const router = express.Router()
const Controller = require('../controllers/repository')

router.route('/')
  .post(Controller.createNew)
  .get(Controller.getAll)

router.route('/:repository_id')
  .get(Controller.getOne)
  .put(Controller.updateOne)
  .delete(Controller.deleteOne)

module.exports = router
