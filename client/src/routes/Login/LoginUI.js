import React from 'react';
import Form from '../../components/Form/Form.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button';
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./Login.scss"
import { Link } from "react-router-dom"

export default function LoginUI({ handleSubmit, handleEmailChange, handlePasswordChange, loading }) {
  return (
    <div className='login-page'>
      <section className='logo-section'>
        <Logo className="logo" />
      </section>
      <section className='login-form-section'>
        <Form 
          onSubmit={handleSubmit}
          className="login-form"
          id="login-form"
        >
          <TextArea 
            onChange={handleEmailChange}
            id="email"
            name="email"
            type="email"
            size="full-width"
            theme="auth-form"
            label="Email"
            iconLeft={{name: "mail", width: 18, height: 18 }}
            placeholder="Type your email"
          />

          <TextArea 
            onChange={handlePasswordChange}
            id="password"
            name="password"
            type="password"
            size="full-width"
            theme="auth-form"
            label="Password"
            iconLeft={{name: "lock", width: 18, height: 18 }}
            placeholder="Type your password"
          />

          <Button 
            form="login-form"
            type="submit"
            content="Sign In"
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