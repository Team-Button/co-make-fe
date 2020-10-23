import React from 'react'
import { CommentBox } from "../../components"

function Comments({ comments }) {
    return (
        <section className="comments justify-content-xs-center" id="comments">
            {
                comments.map(eachComment => 
                    <CommentBox
                        key={eachComment.comment_id}
                        commentor_avatar={eachComment.commentor_avatar}
                        commentor={eachComment.commentor}
                        comment={eachComment.comment}
                        comment_id={eachComment.comment_id}
                    />
                )
            }
        </section>
    )
}

export default Comments
