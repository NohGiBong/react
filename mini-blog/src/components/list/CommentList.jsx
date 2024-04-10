import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function CommentList(props) {
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