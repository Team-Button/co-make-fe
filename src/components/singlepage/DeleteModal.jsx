import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/actions'


export default function DeleteModal({props, post}) {

    const dispatch = useDispatch()
    const deleteThisPost = e => {
        dispatch(deletePost(post.id))
        props.history.push("/dashboard")
    }

    return (
        <>
            <div className="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModalHeader">Delete Post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete "{post.topic}" post? Once the post is deleted, you can never retrieve it back
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={deleteThisPost}>Delete</button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}
