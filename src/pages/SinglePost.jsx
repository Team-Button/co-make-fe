import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPostById } from "../redux/actions"
import { Layout, SingleIssue } from "../components"

export function SinglePost(props) {
    const dispatch = useDispatch()
    const post = useSelector(state => state.singlePost)
    console.log(post.post)
    useEffect(()=> {
        dispatch(getPostById(props.match.params.id))
    },[])
    
    return (
        <>
            <Layout>
                <main>
                {post.isFetching && <div></div>}
                {post.post &&  <SingleIssue props={post}/>}

                    
                </main>
            </Layout>  
        </>
    )
}
