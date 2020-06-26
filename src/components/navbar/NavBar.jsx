import React from 'react'
import { Link } from "react-router-dom"

export function NavBar() {
    return (
<nav className="navbar bg-primary navbar-dark">
  <Link className="navbar-brand nav-logo" to="/dashboard"><h2>Co-Unity</h2></Link>
  <div>
      <span className="text-white px-3">Welcome Karen</span>
  
        <button className="btn btn-outline-primary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
        </button>
  </div>
  <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
    <Link className="nav-item nav-link" to="/dashboard">Home</Link>
    <Link className="nav-item nav-link" to="/my-post">My Posts</Link>
    <Link className="nav-item nav-link" to="/report-issue">Report an Issue</Link>
    <Link className="nav-item nav-link" to="/logout">Logout</Link>
  </div>

</nav>
    )
}
