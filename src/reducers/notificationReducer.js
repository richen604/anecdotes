export const hideNotify = (notification) => {
  return {
    type: 'HIDE_NOTIFY',
    notification,
  }
}

const notificationReducer = (state = 'HIDE_NOTIFY', action) => {
  switch (action.type) {
  case 'VOTE_ADD':
    return {
      msg: `Vote Added for anecdote: '${action.data.content}'`,
      variant: 'success'
    }
  case 'ANECDOTE_ADD':
    return {
      msg: `Anecdote: '${action.data.content}' created!`,
      variant: 'success'
    }
  case 'DELETE_ANECDOTE':
    return {
      msg: `Anecdote '${action.data.content}' deleted!`,
      variant: 'warning'
    }
  case 'HIDE_NOTIFY':
    return 'HIDE_NOTIFY'
  default:
    return state
  }
}

export default notificationReducer
