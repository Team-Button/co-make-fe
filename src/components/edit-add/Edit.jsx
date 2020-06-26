import React from 'react'

export function Edit() {
    return (
        <>
            <form className="mx-auto">
                <div className="edit-form mx-auto form-group p-3 d-flex flex-column justify-content-center">
                    <label for="topic">Topic</label>
                    <input
                        className="form-control"
                        id="topic"
                        name="topic"
                        />
                    <label for="category">Category</label>
                    <select name="category" className="form-control" id="category">
                        <option value={1}>Public Safety</option>
                        <option value={2}>Construction</option>
                        <option value={3}>Animal Control</option>
                        <option value={4}>Housing COde</option>
                    </select>

                    <label for="description">Description</label>
                    <textarea
                        className="form-control"
                        id="topic"
                        rows="4"
                        />
                
                { /* in case we add photo functionality later on
                <section className="edit-photo">
                    <div></div>
                    <button className="upload-photo btn btn-primary px-5 m-5">Upload Photo</button>
                </section> */}
                <button className="edit-btn btn btn-primary pl-5 pr-5 m-3">Edit Content</button>
                </div>
                
            </form>
        </>
    )
}
