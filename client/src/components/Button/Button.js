import React from 'react';
import "./Button.scss";
import IconLoader from '../Elements/IconLoader/IconLoader';

export default function Button(props) {
  const { iconLeft, iconRight } = props;

  return (
    <button
      form={props.form}
      type={props.type}
      className={`button button_${props.theme} button_${props.size ? props.size : ""} ${iconLeft ? "pl-50" : ""} ${iconRight ? "pr-50" : ""}`}
      disabled={props.disabled ? props.disabled : null}
      onClick={props.onClick}
    >
      {iconLeft && (
        <i className="icon icon_left">
          {<IconLoader {...iconLeft} />}
        </i>
      )}
      <span className='button_content'>{props.content}</span>
      {iconRight && (
        <i className="icon icon_right">
          {<IconLoader {...iconRight} />}
        </i>
      )}
    </button>
  )
}
