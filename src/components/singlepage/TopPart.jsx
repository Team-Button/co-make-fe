import React, { useState, useEffect } from 'react'
import { AxiosWithAuth } from "../../utils"

export default function TopPart(props) {

    const [ vote, setVote ] = useState(false)
    const [ totalVote, setTotalVote ] = useState(0)

    useEffect(()=> {
        console.log(props)
        setTotalVote(props.votes.length)
        if (props.votes.find(el => el.voter_id == props.reported_by)){
            setVote(true)
        }
    },[vote, setVote])

    const sendVote = async (e) => {
        setVote(true)
        const newVote = await AxiosWithAuth().post(`/api/post/${props.id}/vote`)
        setTotalVote(totalVote + 1)
    }

    const unVote = async (e) => {
        setVote(false)
        const newVote = await AxiosWithAuth().delete(`/api/post/${props.id}/vote`)
        setTotalVote(totalVote - 1)
    }

    return (
        <>
            <section className="row m-5">
                <div className="col-6 topic-name-date p-2">
                    <div className="topic">                    
                        <h3>Topic</h3>
                        <h2>{ props.topic }</h2>
                    </div>
                    
                    <div className="reportedby">
                        <h4><strong>Reported By</strong></h4>
                        <h4>{ props.reported_by }</h4>
                    </div>
                    <div className="posteddate">
                        <h4><strong>Posted Date</strong></h4>
                        <h4>{ props.posted_date }</h4>
                    </div>

                </div>
                <div className="col-6 votes-description p-2">
                    <div className="current-votes">
                        <h4>Current Vote</h4>
                        <h3>{ totalVote }</h3>
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
                    <div>
                        <p>
                            { props.description }
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
