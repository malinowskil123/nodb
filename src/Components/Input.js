import React from 'react'
import './Input.css'

export default function Input(props) {
  const { placeHolder, onchange, value, type } = props
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={e => onchange(e.target.value)}
        placeholder={placeHolder}
      />
    </div>
  )
}
