import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { AxiosWithAuth } from "../../utils"

function PostsCard({ post }) {

  const [ vote, setVote ] = useState(false)
  const [ totalVote, setTotalVote ] = useState(0)
  useEffect(()=> {
      const allVotes = post.votes.length
      setTotalVote(allVotes)
      if (post.votes.find(el => el.voter_id === post.reported_by)){
          setVote(true)
      }
  },[vote, setVote])

  const sendVote = async (e) => {
      setVote(true)
      const newVote = await AxiosWithAuth().post(`/api/post/${post.id}/vote`)
      setTotalVote(totalVote + 1)
  }

  const unVote = async (e) => {
      setVote(false)
      const newVote = await AxiosWithAuth().delete(`/api/post/${post.id}/vote`)
      setTotalVote(totalVote - 1)
  }

  return (
    
    <div className="card ">
      <Link to={`/posts/${post.id}`}>
      <img className="card-img-top" src={post.photo} alt="C" />
      </Link>
      <div className="card-body row ">
      <h4 className="card-title m-2 mt-3 mr-5 pl- pr-1">{post.topic}</h4>
        {
          vote === true? 
          <button 
            className="btn btn-secondary btn-sm m-3 ml-5 pl-2 pr-2 pt-0 pb-0"
            onClick={unVote}>
            Unvote
          </button> :
        
          <button 
            className="btn btn-primary btn-sm m-3 ml-5 pl-2 pr-2 pt-0 pb-0"
            onClick={sendVote}>
            Upvote
          </button>
        }
        
      </div>
      <p className="card-text pl-3">{ totalVote } votes</p>
      <p className="card-text mb-2 pl-3">
        {post.description}
      </p>
    </div>
    
  );
}

export default PostsCard;
