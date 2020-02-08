import React from 'react'
import './Input.css'

export default function Input(props) {
  const { placeHolder, onchange, value } = props
  return (
    <div>
      <input
        value={value}
        onChange={e => onchange(e.target.value)}
        placeholder={placeHolder}
      />
    </div>
  )
}
