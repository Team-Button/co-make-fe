import React from "react";

export const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
      case "required":
        return <p>This is required</p>;
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
