import React from "react";
import { Link } from "react-router-dom"

function PostsCard({ post }) {


  return (
    
    <div className="card ">
      <Link to={`/posts/${post.id}`}>
      <img className="card-img-top" src={post.photo} alt="C" />
      </Link>
      <div className="card-body row ">
        <h4 className="card-title m-2 mt-3 mr-5 pl- pr-1">{post.topic}</h4>
      </div>
      <p className="card-text pl-3">{ post.votes.length } votes</p>
      <p className="card-text mb-2 pl-3">
        { post.description }
      </p>
    </div>
  );
}

export default PostsCard;
