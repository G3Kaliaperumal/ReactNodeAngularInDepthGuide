import React from 'react';
import { useForm } from 'react-hook-form';

// eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          ref={register({ required: true, pattern: EMAIL_PATTERN })}
          name="email"
          type="email"
          className="form-control"
          id="email"
        />
        {
          errors.email &&
          <div className="alert alert-danger">
            {
              errors.email.type === 'required' &&
              <span>Email is required!</span>
            }
            {
              errors.email.type === 'pattern' &&
              <span>Not vaild email format!</span>
            }
          </div>
        }
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          ref={register({ required: true, minLength: 8, maxLength: 15 })}
          name="password"
          type="password"
          className="form-control"
          id="password"
        />
        {
          errors.password &&
          <div className="alert alert-danger">
            {
              errors.password.type === 'required' &&
              <span>Password is required!</span>
            }
            {
              errors.password.type === 'minLength' &&
              <span>Password should be atleast 8 characters long!</span>
            }
            {
              errors.password.type === 'maxLength' &&
              <span>Password should not be more than 15 characters long!</span>
            }
          </div>
        }
      </div>

      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Submit</button>
    </form>
  )
}

export default LoginForm;
