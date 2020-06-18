import React from 'react'
import community from '../../assets/community.svg'

export function LoginHeader() {
    return (
        <header>
            <img src={community} alt="An illustration of a community" />
            <h1 className="co-unity">Co-Unity</h1>
        </header>
    )
}

