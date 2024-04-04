import './App.css';
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

// Page import
import MainPage from "./components/page/MainPage";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
    const [test, setTest] = useState("");

    axios.get("/test")
        .then(response => {
            setTest(response.data);
        })
        .catch(err => console.error(err));

    return (
        <BrowserRouter>
            <div>서버에서 가져온 데이터 출력해봄 : {test}</div>
            <MainTitleText>미니 블로그</MainTitleText>
                <Routes>
                    <Route index element={<MainPage />} />
                    <Route path="post-write" element={<PostWritePage />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;

/*
  react-router-dom - 라우팅(routing)을 위한 라이브러리
  Route = 노선, 경로
  웹사이트에서 라우팅 - 사용자가 원하는 경로로 보내는 것
  <BrowserRouter>
        <Routes>
          <MainTitleText>미니 블로그</MainTitleText>
            <Route index element={<MainPage />} />
            <Route path="places" element={<PlacePage />} />
            <Route path="games" element={<GamePage />} />
        </Routes>
      </BrowserRouter>

      / -> MainPage 컴포넌트가 렌더링되어 화면에 나옴
      / places -> PlacePage 컴포넌트가 렌더링되어 화면에 나옴
      / games -> GamePage 컴포넌트가 렌더링되어 화면에 나옴
*/
