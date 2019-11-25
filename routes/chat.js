const express = require('express')
const router = express.Router()
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const Chat = require('../models/Chat.js')

server.listen(4000)

io.on('connection', (socket) => {
  console.log('User connected')
  socket.on('disconnect', () => console.log('User disconnected'))
  socket.on('save-message', (data) => {
    console.log(data)
    io.emit('new-message', { message: data })
  })
})

/* GET ALL CHATS */
router.get('/:roomid', async (req, res, next) => {
  try {
    const products = await Chat.find({ room: req.params.roomid })
    res.json(products)
  } catch (err) {
    return next(err)
  }
})

/* GET SINGLE CHAT BY ID */
router.get('/:id', async (req, res, next) => {
  try {
    const post = await Chat.findById(req.params.id)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* SAVE CHAT */
router.post('/', async (req, res, next) => {
  try {
    const post = await Chat.create(req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* UPDATE CHAT */
router.put('/:id', async (req, res, next) => {
  try {
    const post = await Chat.findByIdAndUpdate(req.params.id, req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

/* DELETE CHAT */
router.delete('/:id', async (req, res, next) => {
  try {
    const post = await Chat.findByIdAndRemove(req.params.id, req.body)
    res.json(post)
  } catch (err) {
    return next(err)
  }
})

module.exports = router
