import React, { useState, useRef } from "react"; 
import Login from "./Login";


const USER_ID = "user";
const USER_PW = "1234";

function LoginPage2() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [result, setResult] = useState("");
    const inputId = useRef("");
    const inputPw = useRef("");

    const onClickLogin = () => {
        if ((USER_ID === userId) && (USER_PW === userPw)) {
            setIsLoggedIn(true);
            setResult("");
        } else {
            setIsLoggedIn(false);
            setResult("아이디와 비밀번호 확인");
            inputPw.current.select();
        }
    }
    
    const onClickLogout = () => { 
        setUserId("");
        setUserPw("");
        setIsLoggedIn(false);

    }

    const submit = (e) => {
        e.preventDefault();

        if(userId === "") {
            setResult("아이디 치셈");
            inputId.current.focus();
            return false;
        }

        if(userPw === "") {
            setResult("비번 치셈");
            inputId.current.focus();
            return false;
        }

        onClickLogin();
    }

    const welcome = `${userId}님 어서오셈`;

    return (
        <div>
        {
            !isLoggedIn && (
                <>
                <form onSubmit={submit}>
                    <p>아이디 : <input ref={inputId} type="text" onChange={(e) => setUserId(e.target.value)} /></p>
                    <p>비밀번호 : <input ref={inputPw} type="passowrd" onChange={(e) => setUserPw(e.target.value)} /></p>
                    <button type="submit">로그인</button>
                </form>
                <p style={ {color: "red"} }>{result}</p>
                </>
            )
        }

        {
            isLoggedIn && (
                <>
                    <div style={{ padding: 16 }}>{welcome}</div>
                    <div><button onClick={onClickLogout}>로그아웃</button></div>
                </>
            )
        }
        </div>
    );
}

export default LoginPage2;