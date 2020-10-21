import React, { useState, useEffect } from "react"
import axios from "axios"
import PostsCard from "../dashboard/PostsCard"

export function HomeSection() {

    const [ publicPosts, setPublicPosts ] = useState([])
    const [ error, setError ] = useState()
    useEffect(()=> {
        axios.get("public/posts")
            .then(response => {
                setPublicPosts(response.data)
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    })
    return (
        <section>
            { publicPosts.map(el => <PostsCard post={el} />) }
        </section>
    )
}
