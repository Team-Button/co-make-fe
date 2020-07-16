import React from "react";
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div>
      {" "}
      <div className="row mb-2 mt-5  ">
        <div className="col-md-2 ">
          <Link to="/report-issue">Add a New Post</Link>
        </div>

        <div className="col-md-2">
          <Link to="/dashboard">All Issues</Link>{" "}
        </div>

        <div className="col-md-2">
          <Link to="/dashboard">Top Issues</Link>{" "}
        </div>

        <div className="col-md-2">
          <Link to="/about">Archived</Link>
        </div>
      </div>
    </div>
  );
}
