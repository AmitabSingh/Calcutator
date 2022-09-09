import React from 'react'

function AllButton(props) {
    console.log('props---', props)
  return (
    <button onClick={
        props.val === 'C' ? props.clearInput : props.val === '=' ? props.totalClickHandler : props.clickHandler 
      } 
        className={props.val === 'C' ? 'cancel' : props.val === '=' ? 'equal' : ''}>{props.val}</button>
  )
}

export default AllButton