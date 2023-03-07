import React, { useState } from 'react';
import SignupData from './SignupData';
import SignupUI from './SignupUI';
import { useNavigate } from 'react-router-dom';
import { hasError } from '../../utils/hasError';
import InputValidation from '../../components/TextArea/InputValidation';
import { getErrorMessage } from '../../utils/firebaseErrorHandlers';

export default function Signup() {
  const { signup } = SignupData();
  const { validateInputs } = InputValidation();
  const navigate = useNavigate();

  const [globalError, setGlobalError] = useState("")

  const [states, setStates] = useState({
		"signup_email_input": { value: '', errorMsg: '', type: 'email'},
		"signup_password_input": { value: '', errorMsg: '', type: 'password'},
		"signup_password_confirmation_input": { value: '', errorMsg: '', type: 'password-confirmation'},
	});

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { validationResult } = validateInputs(states);
    setGlobalError(null);

    if(hasError(validationResult)) {
      for(let stateId in validationResult) {
        setStates((prev) => ({
          ...prev,
          [stateId]: {
            ...prev[stateId],
            errorMsg: validationResult[stateId].errorMsg
          },
        }));
      }
      return;
    } else {
      setLoading(true);
      try {
        const res = await signup(states.signup_email_input.value, states.signup_password_input.value);
        navigate("/dashboard");
        console.log(res)
      } catch (error) {
        setGlobalError(getErrorMessage(error));
      }
      setLoading(false);
    }
  }

  const handleChange = (event) => {
    let stateId = event.target.id;

    setStates((prev) => ({
			...prev,
			[stateId]: {
        // ...prev[stateId],
				type: states[stateId].type,
				value: event.target.value,
			},
		}));
  }

  return (
    <SignupUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      loading={loading}
      states={states}
      globalError={globalError}
    />
  );
}
