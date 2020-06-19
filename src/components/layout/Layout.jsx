import React from 'react'
import { Footer, NavBar } from '../index'

export function Layout({ children }) {
    return (
        <>
            <NavBar />
                <div className="container-lg">
                    { children }
                </div>
            <Footer />
        </>
    )
}
