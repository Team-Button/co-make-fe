import React, {useEffect} from "react";
import PostsCard from "./PostsCard";
import {getPosts} from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";


export function Posts() {
  
  const { allPosts, login } = useSelector(state => state)
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getPosts())
  }, [dispatch]) 

  return (
    <section id="topIssues">
      <div className="text-center mb-4 mt-4">
        <h2>Top Issues</h2>
      </div>
      <div className="d-flex flex-wrap">
      {
        allPosts.posts.map((post, index) => 
          <PostsCard key={ post.id } post={ post } id={ index } userInfo={ login } />    
      )}
      </div>
    </section>
  );
}
