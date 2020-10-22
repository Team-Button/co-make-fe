import React from 'react'
import { Button } from "react-bootstrap"
import { HomeHeader, Footer, HomeSection } from '../components'

export function AppHome() {
    return (
        <>
            <div className="container-sm">
                <HomeHeader />
                <HomeSection />
                <div className="text-center mt-3">
                    <p>
                        These are issues posted by people in our communities. We aim to make sure all voices are heard and that everybody is aware of.
                    </p>
                    <p> 
                        You can also be a part of making your community better. Join Co-Unity today and let your community know what's going on!
                    </p>
                </div>
                <div className="mx-auto m-3">
                    <Button variant="primary">Login</Button>{` `}
                    <Button variant="outline-primary">Sign Up</Button>
                </div>
            </div>
            <Footer />
        </>
    )
}
