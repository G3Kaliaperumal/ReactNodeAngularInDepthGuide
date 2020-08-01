import React from 'react';
import { useForm } from 'react-hook-form';

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input ref={register} name="email" type="email" className="form-control" id="email" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input ref={register} name="password" type="password" className="form-control" id="password" />
      </div>

      <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Submit</button>
    </form>
  )
}

export default LoginForm;
