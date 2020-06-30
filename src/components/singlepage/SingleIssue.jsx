import React from 'react'


import TopPart from './TopPart'

export function SingleIssue({ props }) {
    
    return (
        <>
            <article className="single-issue">
                {props.isFetching && <div></div>}
                {props.post && <TopPart props={props.post} /> }
            </article>
        </>
    )
}
