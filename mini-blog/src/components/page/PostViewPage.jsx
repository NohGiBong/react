import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
// import data from "../../data.json"
import axios from "axios";
import PostEditPage from "./PostEditPage";


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

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const [post, setPost] = useState([]);

    const [comment, setComment] = useState("");

    const [comments, setComments] = useState([]);

    const [content, setContent] = useState("");


    useEffect(() => {
        axios.get(`/blog/get/${postId}`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        axios.get(`/blog/reply/list/${postId}`)
            .then(response => {
                setComments(response.data)
            })
            .catch(error => console.error(error));
    }, [postId]);

    const submitBlogComment = () => {
        axios.post(`/blog/replyWrite`, {
            postId: postId,
            content: content
        })
            .then(() => {
                setContent("");

                alert("등록 완료");
                axios.get(`/blog/reply/list/${postId}`)
                    .then(response => setComments(response.data))
                    .catch(error => console.error(error));
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

                    <CommentList comments={comments} />

                    {/* 미구현
                    <CommentList comments={post.blogReplyList} />
                    */}

                    <TextInput height={40} value={comment}
                        onChange={(event) => {
                            setComment(event.target.value);
                        }}
                    />

                    <Button title="댓글 쓰기"
                            onClick={submitBlogComment}
                    />
                </PostContainer>
            </Container>
        </Wrapper>
    )
}



export default PostViewPage;