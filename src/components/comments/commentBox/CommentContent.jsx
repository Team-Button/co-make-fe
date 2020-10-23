import React from 'react'

function CommentContent({ commentor, comment }) {
    return (
        <div className="" id="commentContent">
            <h6><strong>{ commentor }</strong></h6>
            <p>{ comment }</p>
        </div>
    )
}

export default CommentContent
