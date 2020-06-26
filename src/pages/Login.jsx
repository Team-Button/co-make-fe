import React from 'react'
import { LoginHeader, LoginForm, Footer } from '../components'

export function Login(props) {
    return (
        <>
            <div className="container-sm">
                <LoginHeader />
                <LoginForm props={props}/>
            </div>
            <Footer />
        </>
    )
}

