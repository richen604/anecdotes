const mongoose = require('mongoose')

const anecdoteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  votes: { type: Number, default: 0 },
})

anecdoteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Anecdote = mongoose.model('Anecdote', anecdoteSchema)

module.exports = Anecdote