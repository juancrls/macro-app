import React, { useState } from 'react';
import LoginData from './LoginData';
import LoginUI from './LoginUI';
import { useNavigate } from 'react-router-dom';
import { hasError } from '../../utils/hasError';
import InputValidation from '../../components/TextArea/InputValidation';
import { getErrorMessage } from '../../utils/firebaseErrorHandlers';

export default function Login() {
  const { login } = LoginData();
  const { validateInputs } = InputValidation();
  const navigate = useNavigate();

  const [globalError, setGlobalError] = useState("")

  const [states, setStates] = useState({
		"login_email_input": { value: '', errorMsg: '', type: 'email'},
		"login_password_input": { value: '', errorMsg: '', type: 'password'},
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
        const res = await login(states.login_email_input.value, states.login_password_input.value);
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
				value: event.target.value,
				type: event.target.type,
			},
		}));
  }

  return (
    <LoginUI
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      loading={loading}
      states={states}
      globalError={globalError}
    />
  );
}
