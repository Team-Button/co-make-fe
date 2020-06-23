import React from "react";
import PostsCard from "./PostsCard";

export function Posts() {
  return (
    <div>
      <div className="text-center mb-4 mt-4">
        <h2>Top Issues</h2>
      </div>
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
