import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from "react-bootstrap/Toast";
export function RegisterHeader() {
  const [show, setShow] = useState(true);
  const isRegistered = useSelector((state) => state.register.isRegistered);
  return (
    <>
      <header className="row  counity-signup d-flex justify-content-around align-items-center">
        <Link className="text-decoration-none" to="/">
          <span className="col-sm counity-name">Co-Unity</span>
        </Link>
        {isRegistered ? (
          <Toast onClose={() => setShow(false)} show={show}>
            <Toast.Header className="mr-auto bg-danger text-center text-white font-weight-bold">
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2 "
                alt=""
              />
              YOU HAVE BEEN REGISTERED SUCCESSFULLY!
            </Toast.Header>
            <Toast.Body>
              <Link
                to="/login"
                className="nav-link text-center font-weight-bold"
              >
                CLICK HERE TO LOGIN
              </Link>
            </Toast.Body>
          </Toast>
        ) : (
          ""
        )}
        <span className="create-profile">Create Profile</span>
      </header>
    </>
  );
}
