import React from 'react'


import TopPart from './TopPart'

export function SingleIssue({ props, singlePost }) {
    
    return (
        <>
            <article className="single-issue">
                <TopPart props={props, singlePost.post} />
            </article>
        </>
    )
}
