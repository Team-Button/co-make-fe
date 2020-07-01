import React from 'react';
import biedit from '../../assets/biedit.svg'
import bidelete from '../../assets/bidelete.svg'
import DeleteModal from './DeleteModal'
import { useSelector } from 'react-redux'

export default function BottomPart({ props, post }) {

    const userInfo = useSelector(state => state.login)
    return (
        <>

            <section className="bottom-half d-flex justify-content-arount p-5">
                <div className="image-wrap p-2 col-6 rounded">
                    <img src={post.photo} alt={`Photo of ${post.topic}`}/>
                </div>
                <div className="description p-2 col-6">
                    <h3>Description</h3>
                    <p className="py-3">{ post.description }</p>
                    <div className="d-flex justify-content-end">
                        {
                            userInfo.user.id === post.reported_id ?
                            <>
                            <img src={biedit} className="m-2 btn btn-light" alt="Edit Icon" href="/edit-post"  />
                            <button type="button" className="m-2 btn btn-light" alt="Delete Icon" data-toggle="modal" data-target="#deleteModal"><img src={bidelete}  /></button>
                            <DeleteModal props={props} post={post}/>
                            </> :
                            <div></div>
                        }
                        
                    </div>
                </div>
            </section>
            
        </>
    )
}
