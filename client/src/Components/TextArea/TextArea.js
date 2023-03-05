import React from 'react';
import "./TextArea.scss";
import IconLoader from '../Elements/IconLoader/IconLoader';

export default function TextArea(props) {
  return (
    <>
      <div className='text-area-container'>
        <label className='text-area-label'>
          {props.label}
        </label>

        <div className='input-container'>
          <input
            value={props.value}
            onChange={props.onChange}
            id={props.id}
            name={props.name}
            type={props.type}
            className={`input input_${props.theme} ${props.iconLeft ? "pl-50" : ""} ${props.iconRight ? "pr-50" : ""}`}
            placeholder={props.placeholder}
            >
          </input>
          {props.iconLeft && (
            <i className="icon icon_left">{<IconLoader {...props.iconLeft}/>}</i>
          )}
					{props.iconRight && (
						<i className="icon icon_right">{<IconLoader {...props.iconRight}/>}</i>
					)}
        </div>
      </div>
      {/* {error} */}
    </>
  )
}