import React from "react";
import { RegisterHeader, RegisterForm, Footer } from "../components";

export function Register(props) {
  return (
    <>
      <div className="register container-sm">
        <RegisterHeader />
        <RegisterForm props={props} />
      </div>
      <Footer />
    </>
  );
}
