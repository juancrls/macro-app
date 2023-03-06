export default function InputValidation() {

  const validateEmailInput = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
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
  
  const validateInputs = (states) => {
    const validationResult = {}

    for(let state in states) {
      validationResult[state] = {};
      let { type, value } = states[state];

      if(type == "email") { 
        validationResult[state].errorMsg = validateEmailInput(value);
      } else if(type == "password") {
        validationResult[state].errorMsg = validatePasswordInput(value);
      }
    }
    return {
      validationResult
    }
  }
  return { validateInputs }
}
