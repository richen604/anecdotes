import React from 'react'
import { addVote, removeAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { Button, Card } from 'react-bootstrap'
import './Anecdotes.css'

export default function Anecdotes() {
  const anecdotes = useSelector((state) => {
    if (state.filter === 'ALL') return state.anecdotes

    return state.anecdotes.filter((ancedote) =>
      ancedote.content.toLowerCase().includes(state.filter.toLowerCase()),
    )
  })
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(addVote(anecdote))
  }

  const remove = async (anecdote) => {
    dispatch(removeAnecdote(anecdote))
  }

  return (
    <div className="card-container">
      {anecdotes.map((anecdote) => (
        <Card
          key={anecdote.id}
          variant="light"
          text="dark"
          style={{ width: '80%', padding: '15px' }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Text>
              {' '}
              <strong>{`'${anecdote.content}'`}</strong>{' '}
            </Card.Text>
            <div>{anecdote.votes} votes</div>
            <div className="btn-card">
              <Button
                variant="primary"
                size="sm"
                onClick={() => vote(anecdote)}
                active
              >
                        Vote
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => remove(anecdote)}
                active
              >
                        Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}
