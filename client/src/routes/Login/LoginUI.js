import React from 'react';
import Form from '../../components/Form/Form.js';
import TextArea from '../../components/TextArea/TextArea.js';
import Button from '../../components/Button/Button';

export default function LoginUI({ handleSubmit, handleEmailChange, handlePasswordChange, loading }) {
  return (
    <>
      <Form 
        onSubmit={handleSubmit}
        className="form"
        id="login-form"
      >
        <TextArea 
          onChange={handleEmailChange}
          id="email"
          name="email"
          type="email"
          className="text-area"
        />

        <TextArea 
          onChange={handlePasswordChange}
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
