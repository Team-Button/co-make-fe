import React, { useState, useEffect } from "react"
import { CardColumns } from "react-bootstrap"
import { AxiosWithAuth } from '../../utils'
import PostsCard from "../dashboard/PostsCard"

export function HomeSection() {

    const [ publicPosts, setPublicPosts ] = useState([])
    const [ error, setError ] = useState()
    useEffect(()=> {
        AxiosWithAuth().get("public")
            .then(response => {
                console.log(publicPosts)
                setPublicPosts(response.data.slice(0,3))
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    },[])
    return (
        <section id="publicPost">
            <div className="d-flex flex-wrap">
                { publicPosts.map(el => <PostsCard key={el.id} post={el} />) }
            </div>
        </section>
    )
}
