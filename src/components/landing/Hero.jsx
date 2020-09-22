import React from "react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="hero jumbotron d-flex justify-content-center mb-0">
      <div className="container ">
        <nav className="nav justify-content-between mb-5">
          <Link to="/" className="  nav-link font-weight-bold ">
            Home
          </Link>
          <a href="#about" className="  nav-link font-weight-bold">
            About Co-Unity
          </a>
          <Link to="/team" className=" nav-link font-weight-bold ">
            Meet the Team
          </Link>
          <Link to="/login" className="nav-link font-weight-bold">
            Login
          </Link>
        </nav>
        <div className="align-self-center mt-5 pt-4">
          <h1 className="pt-5 ">Co-Unity</h1>
          <p>Create your dream community through unity</p>
          <Link to={"/register"}>
            <button className="btn btn-primary font-weight-bold">
              Get Started
            </button>
          </Link>
          <a href="#about">
            <button className=" btn-reverse ml-4 font-weight-bold ">
              Learn more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
