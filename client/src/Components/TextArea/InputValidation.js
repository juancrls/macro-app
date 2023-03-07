import { findObjectByType } from "../../utils/findObjectByType"

export default function InputValidation() {
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
      console.log("pass1", passwordValue)
      console.log("pass2", passwordConfirmationValue)
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
    const validationResult = {}

    for(let state in states) {
      validationResult[state] = {};
      let { type, value } = states[state];

      if(type === "email") { 
        validationResult[state].errorMsg = validateEmailInput(value);
      } else if(type === "password") {
        validationResult[state].errorMsg = validatePasswordInput(value);
      } else if(type === "password-confirmation") {
        let passwordValue = "";
        if(findObjectByType(states, "password-confirmation")){
          let filterResult = findObjectByType(states, "password");
          passwordValue = filterResult[Object.keys(filterResult)[0]].value
        }
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
