import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postLogin } from "../../redux/actions";
import { useForm } from "react-hook-form";
import { ErrorMessage, PasswordError } from "./ErrorMessage";

export function LoginForm({ props }) {
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(postLogin({ props, values }));
    props.history.push("/dashboard")
  };

  return (
    <div className="login-page">
      <form className="login-form mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            className="form-control"
            ref={register({ required: true, minLength: 4 })}
            placeholder="Enter your username..."
          />
          <ErrorMessage error={errors.username} />
          <label htmlFor="password" className="mt-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="on"
            id="password"
            className="form-control"
            ref={register({ required: true, minLength: 8 })}
            placeholder="Enter your password..."
          />
          <PasswordError error={errors.password} />
          <button className="login-submit btn btn-primary m-3 pl-5 pr-5">
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        <Link to="register">Don't have an account? Create a new one here</Link>
      </p>
    </div>
  );
}
