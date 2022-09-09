import React from 'react'

function CalcScreen(props) {
    //console.log('props--', props)
  return (
    <input type="text" readOnly value={props.value} />
  )
}

export default CalcScreen