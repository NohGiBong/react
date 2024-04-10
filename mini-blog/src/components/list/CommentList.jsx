import styled from "styled-components";
import CommentListItem from "./CommentListItem";
import React from "react";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;
type Comment = {
    ridx: number;
    // 다른 필드들의 타입 정의
};

type CommentListProps = {
    comments: Comment[];
    commentEdit: (idx: number) => void;
    commentDelete: (idx: number) => void;
};

function CommentList(props: CommentListProps) {
    const { comments, commentEdit, commentDelete } = props;

    return (
        <Wrapper>
            {comments.map((comment) => {
                return (
                    <CommentListItem
                        key={comment.ridx}
                        comment={comment}
                        commentEdit={commentEdit}
                        commentDelete={commentDelete} />
                );
            })}
        </Wrapper>
    );
}

export default CommentList;