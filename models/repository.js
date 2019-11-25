const mongoose = require('mongoose')
const Schema = mongoose.Schema

const repositorySchema = new Schema({
  name: String
})

module.exports = mongoose.model('Repository', repositorySchema)
