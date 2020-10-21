import React from 'react'
import { HomeHeader, LoginForm, Footer } from '../components'

export function Login(props) {
    return (
        <>
            <div className="container-sm">
                <HomeHeader />
                <LoginForm props={props}/>
            </div>
            <Footer />
        </>
    )
}

