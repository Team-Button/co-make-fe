import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../redux/actions";

import {
  ErrorMessage,
  PasswordError,
  EmailError,
  NameError,
} from "./ErrorMessage";

export function RegisterForm(props) {
  const { register, errors, handleSubmit } = useForm();

  const dispatch = useDispatch();
  const onSubmit = (values) => {
    dispatch(registerUser({ props, values }));
  };

  return (
    <>
      <form
        className="register-form mx-auto mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-group d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name..."
            ref={register({ required: true, minLength: 2 })}
          />
          <NameError error={errors.name} />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            id="email"
            className="form-control"
            placeholder="Enter your email..."
            ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })}
          />
          <EmailError error={errors.email} />
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            className="form-control"
            placeholder="Enter your username..."
            ref={register({ required: true, minLength: 4 })}
          />
          <ErrorMessage error={errors.username} />
          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            name="password"
            id="password"
            className="form-control"
            placeholder="Enter your password..."
            type="password"
            ref={register({ required: true, minLength: 8 })}
          />
          <PasswordError error={errors.password} />
          <button className="login-submit btn btn-primary m-3 pl-5 pr-5">
            Register
          </button>
        </div>
      </form>
      <p className="text-center">
        <Link to="/login">Already have an account? Click here to log in</Link>
      </p>
    </>
  );
}
