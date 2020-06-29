import React, {useEffect} from "react";
import PostsCard from "./PostsCard";
import {getPosts} from "../../redux/actions";
import { useDispatch, useSelector} from "react-redux";


export function Posts() {
  
  const postList = useSelector(state => state.allPosts)
  const dispatch = useDispatch();

  console.log(postList)

  useEffect(() => {
   dispatch(getPosts())
  }, [dispatch]) 
  console.log(postList)

  return (
    <div>
      <div className="text-center mb-4 mt-4">
        <h2>Top Issues</h2>
      </div>
      <div className="card-columns">
      {postList.posts.map((post, index) => 
      <PostsCard post={ post } id={ index } />    
                )
            }
      </div>
    </div>
  );
}
