import React from "react";
import { Link } from "react-router-dom";
import town from "../../assets/town.svg";
import task from "../../assets/task.svg";
import community from "../../assets/community.svg";

export function About() {
  return (
    <div id="about" className="container mt-5 text-center ">
      <div className="row no-gutters mb-5 align-items-center">
        <div className="col-sm ">
          <img
            src={town}
            className="landing-img d-block img-fluid "
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-sm ">
          <h2 className="text-primary font-weight-bold ">
            Co-Unity is Awesome
          </h2>
          <p>
            Co-Unity allows you to connect with proactive and like minded people
            in your community! Bringing you and the awesome people of your
            community a little bit closer.
          </p>
        </div>
      </div>
      <div className="row no-gutters align-items-center">
        <div className="col-sm">
          <h2 className="text-primary font-weight-bold">
            You can post your issues
          </h2>
          <p>
            Bring your community concerns to light by posting them on Co-Unity
            for everyone to see. Let the people of your community voice their
            concerns and interest in your issue.
          </p>
        </div>
        <div className="col-2"></div>
        <div className="col-sm ">
          <img
            src={task}
            className="landing-img  d-block img-fluid mb-5 mt-4"
            alt="An illustration of a community street"
          />
        </div>
      </div>
      <div className="row no-gutters align-items-center">
        <div className="col-sm ">
          <img
            src={community}
            className="landing-img  d-block img-fluid mb-5 mt-4"
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-sm">
          <h2 className="text-primary font-weight-bold">
            And fix all the problems
          </h2>
          <p>
            Help improve your community through actions! Not only can you post
            about your issues but you can also offer solutions and request
            volunteers to help you fix the important issues in your community.
          </p>
        </div>
      </div>
      <h2 className=" font-weight-bold mt-5">
        Get Started with Co-Unity today
      </h2>
      <Link to={"/home"}>
        <button
          style={{ fontSize: "2rem" }}
          className=" pr-5 pl-5 pt-3 pb-3 btn btn-primary font-weight-bold mt-5 mb-5"
        >
          Get Started
        </button>
      </Link>
    </div>
  );
}
