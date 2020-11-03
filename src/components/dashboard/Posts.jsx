import React from "react";
import PostsCard from "./PostsCard";

export function Posts({ postsProps, login }) {

  return (
      <section className="d-flex flex-wrap" id="posts">
      {
        postsProps.posts.map((post, index) => 
          <PostsCard key={ post.id } post={ post } id={ index } userInfo={ login } />    
      )}
      </section>
  );
}
