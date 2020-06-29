import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getPostById } from "../redux/actions"
import { Layout, SingleIssue } from "../components"

export function SinglePost(props) {
    const dispatch = useDispatch()
    const singlePost = useSelector(singlePost => singlePost)
    console.log(singlePost)
    useEffect(()=> {
        dispatch(getPostById(props.match.params.id))
    },[])
    
    return (
        <>
            <Layout>
                <main>
                {singlePost.isFetching && <div></div>}
                {singlePost.post &&  <SingleIssue props={props, singlePost}/>}

                    
                </main>
            </Layout>  
        </>
    )
}
