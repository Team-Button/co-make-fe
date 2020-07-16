import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="hero jumbotron d-flex justify-content-center mb-0">
      <div className="container">
        <nav className="nav justify-content-between mb-5">
          <Link to="/" className="  nav-link font-weight-bold ">
            Home
          </Link>
          <Link to="/" className="  nav-link font-weight-bold">
            About Co-Unity
          </Link>
          <Link to="/" className=" nav-link font-weight-bold ">
            Meet the Team
          </Link>
          <Link to="/login" className="nav-link font-weight-bold">
            Login
          </Link>
        </nav>
        <h1 className="pt-5">Co-Unity</h1>
        <p>Create your dream community through unity</p>
      </div>
    </div>
  );
}
