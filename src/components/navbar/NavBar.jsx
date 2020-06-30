import React from 'react'
import { Link, useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { logout } from "../../redux/actions"

export function NavBar(props) {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const signOut = (e) => {
    dispatch(logout())
    push("/")
  }
  return (
<nav className="navbar bg-primary navbar-dark">
  <Link className="navbar-brand nav-logo" to="/dashboard"><h2>Co-Unity</h2></Link>
  <div>
      <span className="text-white px-3">{localStorage.getItem("welcomemsg")}</span>
  
        <button className="btn btn-outline-primary navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
        </button>
  </div>
  <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
    <Link className="nav-item nav-link" to="/dashboard">Home</Link>
    <Link className="nav-item nav-link" to="/my-post">My Posts</Link>
    <Link className="nav-item nav-link" to="/report-issue">Report an Issue</Link>
    <Link className="nav-item nav-link" onClick={signOut} to="/">Logout</Link>
  </div>

</nav>
    )
}
