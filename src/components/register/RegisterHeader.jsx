import React from "react";
import { Link } from "react-router-dom";

export function RegisterHeader() {
  return (
    <>
      <header className="counity-signup d-flex justify-content-between align-items-center">
        <Link className="text-decoration-none" to="/">
          <span className="counity-name">Co-Unity</span>
        </Link>
        <span className="create-profile">Create Profile</span>
      </header>
    </>
  );
}
