import React from 'react'
import TopPart from './TopPart'
import BottomPart from './BottomPart'
import { useSelector } from 'react-redux'

export function SingleIssue({ props, post }) {
    const userInfo = useSelector(state => state.login)
    return (
        <>
            <article className="single-issue">
                <TopPart userInfo={userInfo} post={post} />
                <BottomPart props={props} post={post} userInfo={userInfo} />
            </article>
        </>
    )
}
