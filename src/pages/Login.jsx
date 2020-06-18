import React from 'react'
import { LoginHeader, LoginForm, Footer } from '../components'

export function Login() {
    return (
        <>
            <div className="container-sm">
                <LoginHeader />
                <LoginForm />
            </div>
            <Footer />
        </>
    )
}

