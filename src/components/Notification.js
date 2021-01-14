import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hideNotify } from '../reducers/notificationReducer'
import { UncontrolledAlert } from 'reactstrap'

const Notification = () => {
  const notification = useSelector((state) => state.notification)
  const dispatch = useDispatch()

  if (notification === 'HIDE_NOTIFY') return <></>

  setTimeout(() => dispatch(hideNotify()), 5000)

  return (<UncontrolledAlert color={notification.variant} fade={false}>{notification.msg}</UncontrolledAlert>)
}

export default Notification
