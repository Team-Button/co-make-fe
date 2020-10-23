import React from 'react'
import TopPart from './TopPart'
import BottomPart from './BottomPart'
import Comments from "./Comments"
import { useSelector } from 'react-redux'
import { CommentForm } from '../comments/commentForm/CommentForm'

export function SingleIssue({ props, post }) {
    const userInfo = useSelector(state => state.login)
    return (
        <>
            <article className="single-issue">
                <TopPart userInfo={userInfo} post={post} />
                <BottomPart props={props} post={post} userInfo={userInfo} />
                <Comments comments={post.comments}/>
                <CommentForm />
            </article>
        </>
    )
}
