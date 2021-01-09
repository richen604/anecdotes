import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotify } from '../reducers/notificationReducer'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if (notification === 'HIDE_NOTIFY') return <></>

  setTimeout(() => dispatch(hideNotify()), 5000)

  return <div style={style}>{notification}</div>
}

export default Notification
