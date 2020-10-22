import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostsCard({ post }) {


  return (

    <Card className="m-3 mx-auto" style={{ maxWidth: '325px', height: '450px;' }}>
      <div className="overflow-hidden shadow-lg" style={{ height: '200px' }} >
        <Link to={`/posts/${post.id}`}>
          <img style={{ width: '100%' }} alt={post.topic} src={post.photo} />
        </Link>
      </div>
      <Card.Body>
        <Card.Title>
          <Link to={`/posts/${post.id}`}>
            <h4>{post.topic}</h4>
          </Link>
        </Card.Title>
        <Card.Text>
          <span className="text-primary">
            <strong>{post.votes.length}</strong>
          </span>
          {` `}votes
      </Card.Text>
        <Card.Text>
          {post.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default PostsCard;
