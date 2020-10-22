import React from "react";
import { Link } from "react-router-dom";

export function TeamHeader() {
  return (
    <nav className="navbar bg-primary navbar-dark">
      <Link className="navbar-brand nav-logo" to="/">
        <h2>Co-Unity</h2>
      </Link>
      <div className="text-white ">
        <h1>Meet the Team</h1>
      </div>
      <div></div>
    </nav>
  );
}
