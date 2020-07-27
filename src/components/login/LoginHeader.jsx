import React from "react";
import { Link } from "react-router-dom";
import community from "../../assets/community.svg";

export function LoginHeader() {
  return (
    <header>
      <img
        src={community}
        className="mx-auto d-block img-fluid"
        alt="An illustration of a community"
      />
      <Link className="text-decoration-none" to="/">
        <h1 className="co-unity text-center m-5">Co-Unity</h1>
      </Link>
    </header>
  );
}
