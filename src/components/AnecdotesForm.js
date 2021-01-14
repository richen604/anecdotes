import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'


export default function AnecdotesForm() {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const data = event.target.newAnecdote.value
    event.target.newAnecdote.value = ''
    dispatch(createAnecdote(data))
  }

  return (
    <Form onSubmit={addAnecdote}>
      <FormGroup controlId="formBasicEmail">
        <Label for="newAnecdoteInput">Create New Anecdote</Label>
        <Input name="newAnecdote" id="newAnecdoteInput" placeholder="Enter anecdote..." />
      </FormGroup>
      <Button color="primary" type="submit">
    Submit
      </Button>
    </Form>
  )
}
