import React from "react";
import Card from "../Cards/NutritionalFactsCard/NutritionalFactsCard";
import IconLoader from "../Elements/IconLoader/IconLoader";
import "./Form.scss"

export default function Form(props) {
  const { onSubmit, id, globalError, children } = props
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className="form"
      id={id}
    >
      {globalError && 
        <div className="form_global-error-container">
          <i className="icon icon_left">
            {<IconLoader {...{ name: "alert-circle" }} />}
          </i>
          <span className="form_global-error">
            {globalError}
          </span>
        </div>
      }
      {children}
    </form>
  );
}
