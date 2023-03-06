import { useState } from "react"
import { findObjectByType } from "../../utils/findObjectByType"

export default function InputValidation() {
  const [passwordValue, setPasswordValue] = useState("");

  const validateEmailInput = (email) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(email) === false) {
      return "You must enter an valid email address!"
    } else {
      return ""
    }
  }

  const validatePasswordInput = (password) => {
    if(password.length < 6) {
      return "The password must contain 6 or more characters!";
    } else {
      return ""
    }
  }

  const validatePasswordConfirmationInput = (passwordConfirmationValue, passwordValue) => {
    if(passwordConfirmationValue.length < 6) {
      return "The password must contain 6 or more characters!";
    } else if(passwordValue !== passwordConfirmationValue){
      return "The passwords don't match!";
    } else {
      return ""
    }
  }

  const validateGlobalInputs = (input, currentMessage) => {
    if(input.trim().length < 1) {
      return "This field can't be empty!";
    } else {
      return currentMessage
    }
  }

  const validateInputs = (states) => {
    if(findObjectByType(states, "password-confirmation")){
      let filterResult = findObjectByType(states, "password");
      setPasswordValue(filterResult[Object.keys(filterResult)[0]].value);
    }

    const validationResult = {}

    for(let state in states) {
      validationResult[state] = {};
      let { type, value } = states[state];

      if(type === "email") { 
        validationResult[state].errorMsg = validateEmailInput(value);
      } else if(type === "password") {
        validationResult[state].errorMsg = validatePasswordInput(value);
      } else if(type === "password-confirmation") {
        validationResult[state].errorMsg = validatePasswordConfirmationInput(value, passwordValue);
      }

      validationResult[state].errorMsg = validateGlobalInputs(value, validationResult[state].errorMsg);
    }
    return {
      validationResult
    }
  }
  return { validateInputs }
}
