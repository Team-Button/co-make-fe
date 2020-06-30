import React from "react";

export const ErrorMessage = ({ error }) => {
  if (error) {
    switch (error.type) {
        case "required":
            return <p>This is required</p>;
        case "minLength":
            return <p>Your Topic must have a minmium of 3 characters</p>;
        
      default:
        return null;
    }
  }

  return null;
};


