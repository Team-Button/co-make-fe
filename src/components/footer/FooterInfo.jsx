import React from "react";
import { Link } from "react-router-dom";

function FooterInfo() {
  return (
    <div className="footer-info bg-secondary text-white p-3 ">
      <div className="container-sm d-flex justify-content-around">
        <section className="about-team">
          <h5>
            <strong>About Co-Unity</strong>
          </h5>
          <Link to="/team" className=" text-white">
            Meet the Team
          </Link>
        </section>
        <section className="connect">
          <h5>
            <strong>Stay Connected</strong>
          </h5>
        </section>
      </div>
    </div>
  );
}

export default FooterInfo;
