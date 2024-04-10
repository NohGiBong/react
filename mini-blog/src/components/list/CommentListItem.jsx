import styled from "styled-components";
import Button from "../ui/Button";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    
    :hover {
        background: lightgrey;
    }
`;

const Wrapper2 = styled.div`
    width: 100%;
    text-align: right;
`;


const ContentText = styled.p`
    font-size: 16px;
    white-space: pre-wrap;
`;

function CommentListItem(props) {
    const { comment, commentEdit, commentDelete } = props;

    const editEvent = e => {
        commentEdit(comment.ridx, comment.content)
    }

    const deleteEvent = e => {
        commentDelete(comment.ridx)
    }

    return (
        <>
        <Wrapper>
            <ContentText>{comment.content}</ContentText>
        </Wrapper>

        <Wrapper2>
            <Button title="수정" onClick={editEvent}></Button>
            <Button title="삭제" onClick={deleteEvent}></Button>
        </Wrapper2>
        </>
    );
}

export default CommentListItem;