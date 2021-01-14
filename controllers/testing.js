const router = require('express').Router()
const Anecdote = require('../models/anecdote')

router.post('/reset', async (request, response) => {
  await Anecdote.deleteMany({})

  response.status(204).end()
})

module.exports = router