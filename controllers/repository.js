const Repository = require('../models/repository')

const createNew = async (req, res) => {
  try {
    const repository = await new Repository({ name: req.body.name })
    await repository.save()
    res.json({ message: 'repository created' })
  } catch (err) {
    res.send(err)
  }
}

const getAll = async (req, res) => {
  try {
    const repositories = await Repository.find()
    res.json(repositories)
  } catch (err) {
    res.send(err)
  }
}

const getOne = async (req, res) => {
  try {
    const repository = await Repository.findById(req.params.test_id)
    res.json(repository)
  } catch (err) {
    res.send(err)
  }
}

const updateOne = async (req, res) => {
  try {
    const repository = await Repository.findByIdAndUpdate(req.params.test_id, { name: req.body.name })
    await repository.save()
    res.json({ message: 'repository updated' })
  } catch (err) {
    res.send(err)
  }
}

const deleteOne = async (req, res) => {
  try {
    await Repository.remove({ _id: req.params.test_id })
    res.json({ message: 'Successfully deleted' })
  } catch (err) {
    res.send(err)
  }
}

module.exports = {
  createNew, getAll, getOne, updateOne, deleteOne
}
