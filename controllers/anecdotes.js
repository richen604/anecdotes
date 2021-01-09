const anecdotesRouter = require('express').Router()
const Anecdote = require('../models/anecdote')


anecdotesRouter.get('/', async (request, response) => {
  const anecdotes = await Anecdote.find({})
  response.json(anecdotes)
})

anecdotesRouter.get('/:id', async (request, response) => {
  const anecdote = await Anecdote.findById(request.params.id)

  if (anecdote) {
    response.json(anecdote)
  } else {
    response.status(404).end()
  }
})

anecdotesRouter.post('/', async (request, response) => {
  const body = request.body

  const anecdote = new Anecdote({
    content: body.content,
    votes: body.votes || 0,
  })

  const result = await anecdote.save()

  response.status(201).json(result)
})

anecdotesRouter.delete('/:id', async (request, response) => {
  const anecdote = await Anecdote.findById(request.params.id)
  const deletedAnecdote = await anecdote.findByIdAndDelete(request.params.id)
  return response.status(204).json(deletedAnecdote)
})

anecdotesRouter.put('/:id', async (request, response) => {
  const body = request.body

  const anecdote = {
    content: body.content,
    votes: body.votes,
  }

  const updatedBlog = await Anecdote.findByIdAndUpdate(request.params.id, anecdote, {
    new: true,
  })

  response.status(200).json(updatedBlog)
})

module.exports = anecdotesRouter