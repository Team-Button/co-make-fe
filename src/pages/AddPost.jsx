import React from 'react'
import { Layout, Add } from "../components"

export function AddPost() {
    return (
        <>
            <Layout>
                <div className="report-issue text-center mt-5">
                    <h2 className="title m-2">Report an Issue</h2>
                    <p className="subtitle mt-3">There is no better way to improve our beloved neighborhood than letting everybody knows what is going on</p>
                </div>
                <Add />
            </Layout>
        </>
    )
}