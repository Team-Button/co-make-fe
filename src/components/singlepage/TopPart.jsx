import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../../utils";
import { Link } from "react-router-dom";

export default function TopPart({ post }) {
  const [vote, setVote] = useState(false);
  const [edit, setEdit] = useState(false);
  const [totalVote, setTotalVote] = useState(0);
  console.log("props", post);
  useEffect(() => {
    setTotalVote(post.votes.length);
    if (post.votes.find((el) => el.voter_id == post.reported_by)) {
      setVote(true);
    }
  }, [vote, setVote]);

  const sendVote = async (e) => {
    setVote(true);
    const newVote = await AxiosWithAuth().post(`/api/post/${post.id}/vote`);
    setTotalVote(totalVote + 1);
  };

  const unVote = async (e) => {
    setVote(false);
    const newVote = await AxiosWithAuth().delete(`/api/post/${post.id}/vote`);
    setTotalVote(totalVote - 1);
  };

  return (
    <>
      <section className="row m-5">
        <div className="col-6 topic-name-date p-2">
          <div className="topic">
            <h3>Topic</h3>
            <h2>{post.topic}</h2>
          </div>

          <div className="reportedby">
            <h4>
              <strong>Reported By</strong>
            </h4>
            <h4>{post.reported_by}</h4>
          </div>
          <div className="posteddate">
            <h4>
              <strong>Posted Date</strong>
            </h4>
            <h4>{post.posted_date}</h4>
          </div>
        </div>
        <div className="col-6 votes-description p-2">
          <div className="current-votes">
            <h4>Current Vote</h4>
            <h3>{totalVote}</h3>
          </div>
          <div className="vote-button">
            {vote === true ? (
              <button className="btn btn-secondary" onClick={unVote}>
                Vote
              </button>
            ) : (
              <button className="btn btn-primary" onClick={sendVote}>
                Vote
              </button>
            )}
          </div>
          <div>
            <p>{post.description}</p>
          </div>
          <Link to={`/edit/${post.id}`}>
            <button className="btn btn-primary">Edit Post</button>
          </Link>
        </div>
      </section>
    </>
  );
}
