import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
// import data from "../../data.json";
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

const Search = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledSelect = styled.select`
    padding: 8px;
`;

const StyledInput = styled.input`
  padding: 8px;
`;


function MainPage() {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    const [keyword, setKeyword] = useState("");
    const [searchType, setSearchType] = useState("title");

    useEffect(() => {
            getBlogList()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // 컨트롤러에 데이터를 요청한다
    // 검색 기능을 사용하고 싶을 땐 params를 같이 넘겨준다. 컨트롤러에선 @RequestParam으로 받는다
    const getBlogList = () => {
        axios.get("/blog/list", {params: { searchType, keyword } })
            .then(response => {
                console.log(response.data);
                setData(response.data)
            })
            .catch(error => console.error(error));
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Button title="글쓰기"
                        onClick={() => {
                            navigate("/post-write");
                        }}
                    />

                    <div>
                        <StyledSelect value={searchType} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSearchType(e.target.value)}>
                            <option value="title">제목</option>
                            <option value="content">내용</option>
                        </StyledSelect>
                        <StyledInput
                            type="text"
                            placeholder="검색어 입력"
                            value={keyword}
                            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setKeyword(e.target.value)}
                        />
                        <Button title="검색" onClick={getBlogList} />
                    </div>

                </Search>


                <PostList posts={data}
                    onClickItem={(item) => {
                        navigate(`/post/${item.idx}`);
                    }}
                />
            </Container>
        </Wrapper>
    );
}

export default MainPage;
