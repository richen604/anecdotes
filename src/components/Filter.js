import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(filterChange(event.target.value))
  }

  return (
    <InputGroup onChange={handleChange}>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>Filter</InputGroupText>
      </InputGroupAddon>
      <Input />
    </InputGroup>
  )
}
export default Filter
