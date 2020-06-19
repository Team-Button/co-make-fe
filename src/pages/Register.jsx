import React from 'react'
import { RegisterHeader, RegisterForm, Footer } from '../components'

export function Register() {
    return (
        <>
            <div className="register container-sm">
                <RegisterHeader />
                <RegisterForm />
            </div>
            <Footer />
        </>
    )
}

