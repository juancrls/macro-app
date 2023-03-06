import React from 'react';
import Form from '../../components/Form/Form.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button';
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import Spinner from '../../components/LoadingIndicators/Spinner/Spinner.js';
import "./Login.scss"
import { Link } from "react-router-dom"

export default function LoginUI({ handleSubmit, handleChange, loading, states, globalError }) {
  return (
    <div className='login-page'>
      <section className='logo-section'>
        <Logo className="logo" />
      </section>
      <section className='login-form-section'>
        <Form 
          onSubmit={handleSubmit}
          globalError={globalError}
          id="login-form"
        >
          <TextArea

            onChange={handleChange}
            id="login_email_input"
            type={states.login_email_input.type}
            value={states.login_email_input.value}
            errorMsg={states.login_email_input.errorMsg}
            globalError={!!globalError}
            size="full-width"
            theme="auth-form"
            label="Email"
            iconLeft={{name: "mail", width: 24, height: 24 }}
            placeholder="Type your email"
          />

          <TextArea 
            onChange={handleChange}
            id="login_password_input"
            type={states.login_password_input.type}
            value={states.login_password_input.value}
            errorMsg={states.login_password_input.errorMsg}
            globalError={!!globalError}
            size="full-width"
            theme="auth-form"
            label="Password"
            iconLeft={{name: "lock", width: 24, height: 24 }}
            placeholder="Type your password"
          />

          <Button 
            form="login-form"
            type="submit"
            content={loading ? <Spinner /> : "Sign In"}
            className="login-form-button"
            disabled={loading}
            size="full-width"
            theme="auth-button"
          />

          <div className="redirect-container">
            <span>
              No accounting? Sign up <Link to="/signup">here</Link>.
            </span>
            <span className="forgot-password-link">
              <Link to="/forgot-password">Forgot your password?</Link>
            </span>
          </div>  
        </Form>
      </section>
    </div>
  )
}