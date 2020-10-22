import React from 'react'
import { Link } from "react-router-dom"
function Copyright() {
    return (
        <div className="copyright bg-primary p-2">
            <Link style={{color: "white"}}to="/">Co-Unity {new Date().getFullYear()}</Link> &copy; All rights reserved
        </div>
    )
}

export default Copyright
