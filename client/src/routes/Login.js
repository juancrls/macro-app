import React, { useState } from 'react'
import Form from '../components/Form/Form'
import TextArea from '../components/TextArea/TextArea'
import Button from '../components/Button/Button'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    email: { value: "" },
    password: { value: "" }
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    const res = await login(state.email.value, state.password.value);

    if(res && res.error) {
      let errorMessage = res.error
      console.log(errorMessage)
    } else {
      navigate("/dashboard")
    }

    setLoading(false);
  }

  const handleChange = (event) => {
    const stateId = event.target.id
    setState((prev) => ({
      ...prev,
      [stateId]: { value: event.target.value }
    })) 
  }

  return (
    <>
      <Form 
        onSubmit={handleSubmit}
        className="form"
        id="login-form"
      >
        <TextArea 
          value={state.email.value}
          onChange={handleChange}
          id="email"
          name="email"
          type="email"
          className="text-area"
        />

        <TextArea 
          value={state.password.value}
          onChange={handleChange}
          id="password"
          name="password"
          type="password"
          className="text-area"
        />
      </Form>
      <Button 
        form="login-form"
        type="submit"
        content="Sign In"
        className="form-button"
        disabled={loading}
      />
    </>
  )
}