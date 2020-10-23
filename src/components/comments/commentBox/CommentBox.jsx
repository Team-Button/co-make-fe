import React from 'react'
import { Container, Row, Col } from "react-bootstrap"
import CommentAvatar from "./CommentAvatar"
import CommentContent from "./CommentContent"

export function CommentBox({ commentor_avatar, commentor, comment }) {
    return (
        <Container className="justify-content-md-center shadow-sm p-3 mb-3 bg-white rounded">
            <Row>
                <Col xs={2} lg={1}>
                <CommentAvatar
                    avatarImg={commentor_avatar}
                    commentor={commentor}
                />
                </Col>
                <Col>
                    <CommentContent
                        commentor={commentor}
                        comment={comment}
                    />
                </Col>
            </Row>
        </Container>
    )
}
