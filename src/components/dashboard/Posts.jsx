import React from "react";
import PostsCard from "./PostsCard";

export function Posts() {
  return (
    <div>
      <div className="card-columns">
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
        <PostsCard />
      </div>
    </div>
  );
}
