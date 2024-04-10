import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import axios from "axios";


const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;
    
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage() {
    const navigate = useNavigate();

    const { postId } = useParams();

    const [post, setPost] = useState([]);

    const [comment, setComment] = useState("");

    const [comments, setComments] = useState([]);

    const [r_idx, setR_idx] = useState("");


    useEffect(() => {
        axios.get(`/blog/get/${postId}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getReplyList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getReplyList = () =>  {
        axios.get(`/blog/replyList/${postId}`)
            .then(response => {
                setComments(response.data)
                setComment("")
                setR_idx("")
            })
            .catch(error => console.error(error));
    }

    const submitBlogComment = () => {
        axios.post(`/blog/replyWrite`, {
            blog_idx: postId,
            content: comment,
            ridx: r_idx
        })
            .then(() => {
                setComment("");
                alert("등록 완료");
                // navigate(0)
                getReplyList()
            })
            .catch(err => console.log(err));
    }

    const eventDelete = () => {
        if(window.confirm("삭제?")) {
            axios.get(`/blog/delete/${postId}`)
                .then(() => {
                    alert("삭제됨 ㅇㅇ")
                    navigate("/");
                })
                .catch(error => console.error(error));
        }
    }

    const commentEdit = (ridx, commentt) => {
        setR_idx(ridx)
        setComment(commentt)
        console.log(ridx, commentt, "ㅋㅋㅋ")
    }

    const commentEditCancel = () => {
        setR_idx("")
        setComment("")
    }

    const commentDelete = (ridx) => {
        if(window.confirm("댓글 삭제?")) {
            axios.get(`/blog/replyDelete/${ridx}`)
                .then(() => {
                    alert("댓글 삭제됨 ㅇㅇ")
                    getReplyList()
                })
                .catch(error => console.error(error));
        }
    }

    return (
        <Wrapper>
            <Container>
                <Button title="뒤로 가기"
                        onClick={() => {
                            navigate("/");
                        }}
                />

                <Button title="수정"
                        onClick={() => {
                            navigate(`/post-edit/${postId}`);
                        }}
                />

                <Button title="삭제"
                        onClick={eventDelete}
                />

                <PostContainer>
                    <TitleText>{post.title}</TitleText>
                    <ContentText>{post.content}</ContentText>

                    <CommentLabel>댓글</CommentLabel>

                    <CommentList comments={comments} commentEdit={commentEdit} commentDelete={commentDelete} />

                    <TextInput height={40} value={comment}
                        onChange={(event) => {
                            setComment(event.target.value);
                        }}
                    />

                    <Button title={r_idx === "" ? "댓글 쓰기" : "댓글 수정"}
                            onClick={submitBlogComment}
                    />
                    {r_idx === "" ? "" : <Button title="취소" onClick={commentEditCancel} />
                    }

                </PostContainer>
            </Container>
        </Wrapper>
    )
}

export default PostViewPage;