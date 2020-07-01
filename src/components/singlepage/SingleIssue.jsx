import React from 'react'


import TopPart from './TopPart'
import BottomPart from './BottomPart'

export function SingleIssue({ props, post }) {
    
    return (
        <>
            <article className="single-issue">
                <TopPart post={post} />
                <BottomPart props={props} post={post} />
            </article>
        </>
    )
}
