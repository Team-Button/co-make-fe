import React from "react";
import Image from "../../assets/project-1.jpeg";

function PostsCard() {
  return (
    <div className="card">
      <img className="card-img-top" src={Image} alt="C" />
      <div className="card-body mr row">
        <h4 className="card-title m-2 pl-1 pr-1">Card title</h4>
      </div>
      <button className="btn btn-primary m-3 pl-1 pr-1">Upvote</button>
      <p className="card-text pl-3">Votes</p>
      <p className="card-text mb-2 pl-3">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  );
}

export default PostsCard;
