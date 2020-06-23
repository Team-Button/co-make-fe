import React from "react";
import { Link } from "react-router-dom";

export function Links() {
  return (
    <div className="row mb-2 mt-5  ">
      <div className="col-md-2 ">
        <Link to="/about">Home</Link>
      </div>

      <div className="col-md-2">
        <Link to="/about">All Issues</Link>{" "}
      </div>

      <div className="col-md-2">
        <Link to="/about">Top Issues</Link>{" "}
      </div>

      <div className="col-md-2">
        <Link to="/about">Archived</Link>
      </div>
    </div>
  );
}
