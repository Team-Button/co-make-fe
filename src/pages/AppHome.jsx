import React from 'react'
import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import { HomeHeader, Footer, HomeSection } from '../components'

export function AppHome() {
    return (
        <>
            <Container sm>
                <HomeHeader />
                <Container sm className="text-center px-5">
                    <h4 className="m-3">Bring the Important Issue to Spotlight</h4>
                    <p>
                        We aim to make sure all voices are heard and that everybody is aware of all the issue.
                    </p>
                    <p> 
                        You can be a part of making your community better. Join Co-Unity today and let your everybody know what's going on!
                    </p>
                    <p>
                        <Link to="/login">Log in</Link> or <Link to="/signup">Sign Up </Link>to see more!
                    </p>
                </Container>
                <HomeSection />
            </Container>
            <Footer />
        </>
    )
}
