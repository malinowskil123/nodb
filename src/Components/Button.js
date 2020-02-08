import React from 'react'
import './Button.css'

export default function Button(props) {
  const { actionName, onClickFn, input1, input2 } = props
  const onClick = () => {
    if (input1 === '' || input2 === '') {
      alert('Please Fill Out The Form')
    } else onClickFn()
  }
  return (
    <div>
      <button onClick={onClick}>{actionName}</button>
    </div>
  )
}
