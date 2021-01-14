import React, { useEffect } from 'react'
import Anecdotes from './components/Anecdotes'
import AnecdotesForm from './components/AnecdotesForm'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import './App.css'
import RichenBadge from './components/RichenBadge'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  return (
    <>
      <div id="nav-bar"><h2 className='nav-bar-heading'>Anecdotes</h2></div>
      <div id="appBox">
        <div id="anecdotesBox">
          <Anecdotes />
        </div>
        <div id="inputBox" >
          <div className="input-body">
            <div className="input-box">
              <Filter id="filter"/>
              <Notification id="notification"/>
            </div>
            <AnecdotesForm id="anecdote-form"/>
          </div>
          <RichenBadge />
        </div>
      </div>
    </>
  )
}

export default App
