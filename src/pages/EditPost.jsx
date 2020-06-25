import React from 'react'
import { Layout, Edit } from "../components"

export function EditPost() {
    return (
        <>
            <Layout>
                <h3 className="text-center mt-5">Edit Post</h3>
                <Edit />
            </Layout>
        </>
    )
}
