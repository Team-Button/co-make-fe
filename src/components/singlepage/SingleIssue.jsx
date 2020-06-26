import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux"
import TopPart from './TopPart'

export function SingleIssue({ match }) {
    const singlePost = useSelector(state => 
        state.allPosts.filter(el => el.id == parseInt(match.params.id))
    )
    console.log(singlePost)
    return (
        <>
            <article className="single-issue">
                <TopPart props={singlePost}/>
            </article>
        </>
    )
}
