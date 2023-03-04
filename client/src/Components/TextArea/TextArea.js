import React from 'react'

export default function TextArea(props) {
  return (
    <input
      value={props.value}
      onChange={props.onChange}
      id={props.id}
      name={props.name}
      type={props.type}
      className={props.className}
    >
    </input>
  )
}