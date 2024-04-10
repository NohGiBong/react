import styled from "styled-components";
import PostListItem from "./PostListItem";
import axios from "axios";
import {useState} from "react";
import {useParams} from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    :not(:last-child) {
        margin-bottom: 16px;
    }
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((post) => {
                return (
                    <PostListItem key={post.idx} post={post}
                        onClick={() => { onClickItem(post); }} />
                );
            })}
        </Wrapper>
    );
}

export default PostList;