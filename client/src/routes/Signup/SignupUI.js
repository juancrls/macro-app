import React from "react";
import Form from "../../components/Form/Form.js";
import TextArea from "../../components/TextArea/TextArea.js";
import Button from "../../components/Button/Button";
import Spinner from "../../components/LoadingIndicators/Spinner/Spinner.js";
import "./Signup.scss";
import { Link } from "react-router-dom";

export default function signupUI({
  handleSubmit,
  handleChange,
  loading,
  states,
  globalError,
}) {
  return (
    <div className="signup-page">
      <section className="signup-logo-section"></section>

      <section className="signup-form-section">
        <Form
          onSubmit={handleSubmit}
          globalError={globalError}
          id="signup-form"
        >
          <TextArea
            onChange={handleChange}
            id="signup_email_input"
            type={states.signup_email_input.type}
            value={states.signup_email_input.value}
            errorMsg={states.signup_email_input.errorMsg}
            globalError={!!globalError}
            size="full-width"
            theme="auth-form"
            label="Email"
            iconLeft={{ name: "mail", width: 24, height: 24 }}
            placeholder="Type your email"
          />

          <TextArea
            onChange={handleChange}
            id="signup_password_input"
            type={states.signup_password_input.type}
            value={states.signup_password_input.value}
            errorMsg={states.signup_password_input.errorMsg}
            globalError={!!globalError}
            size="full-width"
            theme="auth-form"
            label="Password"
            iconLeft={{ name: "lock", width: 24, height: 24 }}
            placeholder="Type your password"
          />

          <TextArea
            onChange={handleChange}
            id="signup_password_confirmation_input"
            type={states.signup_password_confirmation_input.type}
            value={states.signup_password_confirmation_input.value}
            errorMsg={states.signup_password_confirmation_input.errorMsg}
            globalError={!!globalError}
            size="full-width"
            theme="auth-form"
            label="Password Confirmation"
            iconLeft={{ name: "lock", width: 24, height: 24 }}
            placeholder="Confirm your password "
          />

          <Button
            form="signup-form"
            type="submit"
            content={loading ? <Spinner /> : "Sign Up"}
            className="signup-form-button"
            disabled={loading}
            size="full-width"
            theme="auth-button"
          />
        </Form>
      </section>
    </div>
  );
}
