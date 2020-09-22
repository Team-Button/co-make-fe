import React from "react";
import { Link } from "react-router-dom";
import mash from "../../assets/mashi.jpg";
import josh from "../../assets/josh1.jpg";

export function OurTeam() {
  return (
    <div id="about" className="container mt-5 text-center ">
      <div className="mb-5">
        <h2>The amazing team behind Co-Unity</h2>
      </div>
      <div></div>
      <div className="row no-gutters mb-5 align-items-center">
        <div className="col-sm ">
          <img
            src={mash}
            className=" team-img img-fluid rounded-circle"
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-sm ">
          <h2 className="text-primary font-weight-bold ">Mashima Button</h2>
          <h3 className="text-primary  ">Full Stack Developer</h3>
          <p>
            Mashima is from Thailand, she makes great Thai food but also kicks
            butt as a Full Stack Developer and a Web Designer (she designed the
            site!)
          </p>
        </div>
      </div>
      {/* <div className="row no-gutters align-items-center">
        <div className="col-sm">
          <h2 className="text-primary font-weight-bold">Joshua Gray</h2>
          <h3 className="text-primary  ">Full Stack Developer</h3>
          <p>
            Joshua is not from Thailand and doesn't make great Thai food but has
            been known to make a mean grilled cheese sandwich!
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
      </div> */}
      <div className="row no-gutters align-items-center">
        <div className="col-sm ">
          <img
            src={josh}
            className=" team-img  img-fluid rounded-circle"
            alt="An illustration of a community street"
          />
        </div>
        <div className="col-sm">
          <h2 className="text-primary font-weight-bold">Joshua Gray</h2>
          <h3 className="text-primary  ">Full Stack Developer</h3>
          <p>
            Joshua is not from Thailand and doesn't make great Thai food but has
            been known to make a mean grilled cheese sandwich!
          </p>
        </div>
      </div>
      <h2 className=" font-weight-bold mt-5">
        Get Started with Co-Unity today
      </h2>
      <Link to={"/register"}>
        <button
          style={{ fontSize: "2rem" }}
          className=" pr-5 pl-5 pt-3 pb-3 btn btn-primary font-weight-bold mt-5 mb-5"
        >
          Sign Up
        </button>
      </Link>
    </div>
  );
}
