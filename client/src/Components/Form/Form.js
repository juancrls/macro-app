import React from 'react'

export default function Form(props) {
  return (
    <form
      onSubmit={props.onSubmit}
      className={props.className}
      id={props.id}
    >
      {props.children}
    </form>
  )
}
