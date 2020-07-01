import React from 'react'


import TopPart from './TopPart'

export function SingleIssue({ post }) {
    
    return (
        <>
            <article className="single-issue">
                <TopPart post={post} />
            </article>
        </>
    )
}
