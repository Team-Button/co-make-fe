import React from 'react'
import { Form, Button } from "react-bootstrap"

export function CommentForm() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Comment</Form.Label>
                    <Form.Control
                        as="textarea"
                        row={4}
                        type="comment"
                        placeholder="Leave a comment..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mb-3">
                    Submit
                </Button>
            </Form>
        </>
    )
}
