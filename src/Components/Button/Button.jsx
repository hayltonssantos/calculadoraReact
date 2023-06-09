import React from 'react'
import './Button.css'

export default function Button(props) {
  let classes = 'button '
  classes += props.operation ? 'operation' : ''
  classes += props.double ? 'double' : ''
  classes += props.triple ? 'triple' : ''
  classes += props.doubleRow ? 'doubleRow' : ''

  return (
    
      <button 
        onClick={e => props.click && props.click(e.target.innerHTML)}
        className={classes}
      >
        {props.label}
      </button>
  )
}
