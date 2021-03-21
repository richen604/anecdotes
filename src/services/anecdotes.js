import axios from 'axios'

//local development 'http://localhost:{PORT}/api/anecdotes'
//production '/api/anecdotes'
const baseUrl = '/api/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (anecdote, id) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)
  return response.data
}

const remove = async (id) => {
  const request = await axios.delete(`${baseUrl}/${id}`)
  return request.data
}

export default {
  getAll,
  createNew,
  update,
  remove
}
