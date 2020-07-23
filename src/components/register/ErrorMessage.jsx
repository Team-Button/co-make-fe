import React from "react";

export const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Username is required</p>;
      case "minLength":
        return <p>Username must have 4 characters</p>;
      case "validate":
        return <p>Username is already used</p>;
      default:
        return null;
    }
  }

  return null;
};

export const PasswordError = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Password is required</p>;
      case "minLength":
        return <p>Password must have 8 characters</p>;
      default:
        return null;
    }
  }

  return null;
};

export const EmailError = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Email is required</p>;
      case "pattern":
        return <p>Please enter a valid Email</p>;
      default:
        return null;
    }
  }

  return null;
};

export const NameError = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>Name is required</p>;
      case "minLength":
        return <p>Name must have 2 characters</p>;
      default:
        return null;
    }
  }

  return null;
};
