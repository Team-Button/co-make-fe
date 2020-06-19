import React from 'react'
import { Link } from 'react-router-dom'

export function LoginForm() {
    return (
        <div className="login-page">
            <form className="login-form mx-auto">
                <div className="form-group d-flex flex-column justify-content-center align-items-center">
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
                        placeholder="Enter your password..."/>
                <button className="login-submit btn btn-primary m-3 pl-5 pr-5">Login</button>
                </div>
            </form>
            <p className="text-center"><Link to="register">Don't have an account? Create a new one here</Link></p>
        </div>
    )
}