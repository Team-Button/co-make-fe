import React, { useState, useEffect } from 'react'
import { AxiosWithAuth } from "../../utils"

export default function TopPart({ post }) {

    const [ vote, setVote ] = useState(false)
    const [ totalVote, setTotalVote ] = useState(0)
    console.log("props", post)
    useEffect(()=> {
        setTotalVote(post.votes.length)
        if (post.votes.find(el => el.voter_id == post.reported_by)){
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
        <>
            <section className="row mt-5">
                <div className="topic col-12">                    
                        <h2><strong>{ post.topic }</strong></h2>
                </div>
                <div className="col-8 topic-name-date py-3">

                    
                    <div className="reportedby">
                        <h5><strong>Reported By</strong></h5>
                        <p>{ post.reporter }</p>
                    </div>
                    <div className="posteddate">
                        <h5><strong>Posted Date</strong></h5>
                        <p>{ post.posted_date }</p>
                    </div>

                </div>
                <div className="col-4 votes-description p-2">
                    <div className="current-votes">
                        <h5><strong>Current Vote</strong></h5>
                        <h3 className="text-primary"><strong>{ totalVote }</strong></h3>
                    </div>
                    <div className="vote-button">
                        {
                            vote === true ? 
                            <button 
                                className="btn btn-secondary"
                                onClick={unVote}>
                                Vote
                            </button> :
                            <button 
                                className="btn btn-primary"
                                onClick={sendVote}>
                                Vote
                            </button>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
