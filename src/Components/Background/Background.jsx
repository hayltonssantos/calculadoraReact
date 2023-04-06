import React from 'react'
import "./Background.css"

export default function Background(props) {
  return (
    <div>
        <div class="patterns pt1" >{props.children}</div>
    </div>
  )
}
