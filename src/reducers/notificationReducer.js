export const hideNotify = (notification) => {
  return {
    type: 'HIDE_NOTIFY',
    notification,
  }
}

const notificationReducer = (state = 'HIDE_NOTIFY', action) => {
  switch (action.type) {
  case 'VOTE_ADD':
    return `Vote Added for anecdote: '${action.data.content}'`
  case 'ANECDOTE_ADD':
    return `Anecdote: '${action.data.content}' created!`
  case 'DELETE_ANECDOTE':
    return `Anecdote '${action.data.content}' deleted!`
  case 'HIDE_NOTIFY':
    return 'HIDE_NOTIFY'
  default:
    return state
  }
}

export default notificationReducer
