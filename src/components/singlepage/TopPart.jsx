import React, { useState, useEffect } from "react";
import { AxiosWithAuth } from "../../utils";

export default function TopPart({ post, userInfo }) {
  const [vote, setVote] = useState(false);
  const [totalVote, setTotalVote] = useState(post.votes);
  console.log("props", post);
  useEffect(() => {
    if (
      totalVote.find(
        (el) => parseInt(el.voter_id) === parseInt(userInfo.user.id)
      )
    ) {
      setVote(true);
    }
  }, [totalVote, userInfo.user.id]);

  const sendVote = async (e) => {
    e.preventDefault();
    await AxiosWithAuth().post(`/posts/${post.id}/vote`);
    setTotalVote([...totalVote, { id: Date.now(), voter_id: userInfo.user.id }]);
    setVote(true);
  };

  const unVote = async (e) => {
    e.preventDefault();
    await AxiosWithAuth().delete(`/posts/${post.id}/vote`);
    setTotalVote(totalVote.filter(el => parseInt(el.voter_id) !== userInfo.user.id));
    setVote(false);
  };

  return (
    <>
      <section className="row mt-5">
        <div className="topic col-12">
          <h2>
            <strong>{post.topic}</strong>
          </h2>
        </div>
        <div className="col-8 topic-name-date py-3">
          <div className="reportedby">
            <h5>
              <strong>Reported By</strong>
            </h5>
            <p>{post.reporter}</p>
          </div>
          <div className="posteddate">
            <h5>
              <strong>Posted Date</strong>
            </h5>
            <p>{post.posted_date}</p>
          </div>
        </div>
        <div className="col-4 votes-description p-2">
          <div className="current-votes">
            <h5>
              <strong>Current Vote</strong>
            </h5>
            <h3 className="text-primary">
              <strong>{totalVote.length}</strong>
            </h3>
          </div>
          <div className="vote-button">
            {vote ? (
              <button className="btn btn-secondary" onClick={unVote}>
                Unvote
              </button>
            ) : (
              <button className="btn btn-primary" onClick={sendVote}>
                Vote
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
