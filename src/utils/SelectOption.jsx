import React from 'react'

const SelectOption = ({ unit }) => {
  return (
    <option value={parseInt(unit)}>{unit}</option>
  )
}

export default SelectOption
