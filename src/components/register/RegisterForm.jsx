import React from 'react'
import { Link } from 'react-router-dom'

export function RegisterForm() {
    return (
        <>
            <form className="register-form mx-auto mt-5">
                <div className="form-group d-flex flex-column justify-content-center align-items-center">
                   
                    <label for="name">Name</label>
                    <input
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter your name..."/>
                   
                   <label for="email">Email</label>
                    <input
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email..."/>
                    
                    <label for="username">Username</label>
                    <input
                        name="username"
                        id="username"
                        className="form-control"
                        placeholder="Enter your username..."/>

                    <label for="password" className="mt-2">Password</label>
                    <input
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter your password..."
                        type="password"/>
                <button className="login-submit btn btn-primary m-3 pl-5 pr-5">Login</button>
                </div>
            </form>
            <p className="text-center"><Link to="/login">Already have an account? Click here to log in</Link></p>
        </>
    )
}
