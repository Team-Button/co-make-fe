import React from 'react'

function CommentAvatar({ avatarImg, commentor }) {
    return (
        <div style={{width: '50px'}} className="rounded-circle overflow-hidden" id="commentAvater">
            <img
                style={{width: '100%'}}
                src={ avatarImg }
                alt={`${commentor}'s avatar`}/>
        </div>
    )
}

export default CommentAvatar
