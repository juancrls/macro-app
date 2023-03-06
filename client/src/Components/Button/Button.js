import React from 'react';
import "./Button.scss";
import IconLoader from '../Elements/IconLoader/IconLoader';

export default function Button(props) {
  return (
    <button
      form={props.form}
      type={props.type}
      className={`button button_${props.theme} button_${props.size == "full-width" ? "full" : ""} ${props.iconLeft ? "pl-50" : ""} ${props.iconRight ? "pr-50" : ""}`}
      disabled={props.disabled ? props.disabled : null}
      onClick={props.onClick}
    >
      <span className='button_content'>{props.content}</span>
    </button>
  )
}
