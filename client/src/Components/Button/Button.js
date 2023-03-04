import React from 'react'

export default function Button(props) {
  return (
    <button
      form={props.form}
      type={props.type}
      className={props.className}
      disabled={props.disabled ? props.disabled : null}
      onClick={props.onClick}
    >
      <span>{props.content}</span>
    </button>
  )
}
