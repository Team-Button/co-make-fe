import React from 'react'

export function LoginForm() {
    return (
        <div className="login-page">
            <form className="login-form">
                <input
                    name="username"
                    placeholder="Enter your username..."/>
                <input
                    name="password"
                    placeholder="Enter your password..."/>
                <button className="login-submit">Login</button>
            </form>
            <p>Don't have an account? Create a new one here</p>
        </div>
    )
}