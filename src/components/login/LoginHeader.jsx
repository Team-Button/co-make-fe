import React from 'react'
import community from '../../assets/community.svg'

export function LoginHeader() {
    return (
        <header>
            <img src={community} className="mx-auto d-block img-fluid"alt="An illustration of a community" />
            <h1 className="co-unity text-center m-5">Co-Unity</h1>
        </header>
    )
}

