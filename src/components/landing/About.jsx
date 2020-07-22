import React from "react";
import { Link } from "react-router-dom";
import town from "../../assets/town.svg";
import task from "../../assets/task.svg";
import community from "../../assets/community.svg";

export function About() {
  return (
    <div id="about" className="container mt-5 text-center ">
      <div className="row no-gutters mb-5">
        <div className="col-8 ">
          <img
            src={town}
            className="landing-img d-block img-fluid mb-5 mt-4"
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-4 mt-4">
          <h2 className="text-primary font-weight-bold ">
            Co-Unity is Awesome
          </h2>
          <p>
            Quis hendrerit dolor magna eget est lorem. Amet massa vitae tortor
            condimentum lacinia quis. Accumsan in nisl nisi scelerisque eu. Sed
            enim ut sem viverra.
          </p>
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-6  mt-4 ">
          <h2 className="text-primary font-weight-bold">
            You can post your issues
          </h2>
          <p>
            Quis hendrerit dolor magna eget est lorem. Amet massa vitae tortor
            condimentum lacinia quis. Accumsan in nisl nisi scelerisque eu. Sed
            enim ut sem viverra.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-4 ">
          <img
            src={task}
            className="landing-img  d-block img-fluid mb-5 mt-4"
            alt="An illustration of a community street"
          />
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-8 ">
          <img
            src={community}
            className="landing-img  d-block img-fluid mb-5 mt-4"
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-4  mt-4">
          <h2 className="text-primary font-weight-bold">
            And fix all the problems
          </h2>
          <p>
            Quis hendrerit dolor magna eget est lorem. Amet massa vitae tortor
            condimentum lacinia quis. Accumsan in nisl nisi scelerisque eu. Sed
            enim ut sem viverra.
          </p>
        </div>
      </div>
      <h2 className=" font-weight-bold mt-5">
        Get Started with Co-Unity today
      </h2>
      <Link to={"/register"}>
        <button
          style={{ fontSize: "2rem" }}
          className="w-25 p-3 btn btn-primary font-weight-bold mt-5 mb-5"
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
}
