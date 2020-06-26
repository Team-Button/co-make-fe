import React from 'react'
import { Footer, NavBar } from '../index'

export function Layout({ children }) {
    return (
        <>
            <NavBar />
                <main className="container-lg">
                    { children }
                </main>
            <Footer />
        </>
    )
}
