import React from 'react'

export default function TopPart({ topic, description, reported_by, posted_date, votes }) {
    return (
        <>
            <section className="row m-5">
                <div className="col-6 topic-name-date p-2">
                    <div className="topic">                    
                        <h3>Topic</h3>
                        <h2>{ topic }</h2>
                    </div>
                    
                    <div className="reportedby">
                        <h4><strong>Reported By</strong></h4>
                        <h4>{ reported_by }</h4>
                    </div>
                    <div className="posteddate">
                        <h4><strong>Posted Date</strong></h4>
                        <h4>{ posted_date }</h4>
                    </div>

                </div>
                <div className="col-6 votes-description p-2">
                    <div className="current-votes">
                        <h4>Current Vote</h4>
                        <h3>{ votes }</h3>
                    </div>
                    <div className="vote-button">
                        <button className="btn btn-primary">Vote</button>
                        <button className="btn btn-secondary">Vote</button>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quas maxime quae sunt dolor voluptatum deserunt inventore qui minima, suscipit et sequi quaerat eos tempore expedita maiores possimus! Doloribus, laborum?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}
