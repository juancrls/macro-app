import React from "react";
import "./TextArea.scss";
import IconLoader from "../Elements/IconLoader/IconLoader";

export default function TextArea(props) {
  const { label, type, value, errorMsg, globalError, iconLeft, iconRight, onChange, id, placeholder, theme } = props;

  return (
    <div className="text-area-container">
      <label className="text-area-label">{label}</label>

      <div className="input-container">
        <input
          onChange={onChange}
          id={id}
          type={type == "password-confirmation" ? "password" : type}
          value={value}
          className={`input input_${theme} ${
            errorMsg || globalError ? "input_error" : ""
          } ${iconLeft ? "pl-50" : ""} ${iconRight ? "pr-50" : ""}`}
          placeholder={placeholder}
        />
        {iconLeft && (
          <i className="icon icon_left">
            {<IconLoader {...iconLeft} />}
          </i>
        )}
        {iconRight && (
          <i className="icon icon_right">
            {<IconLoader {...iconRight} />}
          </i>
        )}
      </div>
      {errorMsg && <span className="input-error-span">{errorMsg}</span>}
    </div>
  );
}
