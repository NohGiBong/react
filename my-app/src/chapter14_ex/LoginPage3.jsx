import React, { useState, useRef } from "react";
import Login from "./Login";
import Logout from "./Logout"
import LoginContext from "./LoginContext";

const USER_ID = "user";
const USER_PW = "1234";

function LoginPage3() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState("");
    const [userPw, setUserPw] = useState("");
    const [result, setResult] = useState("");
    const inputId = useRef("");
    const inputPw = useRef("");

    const onClickLogin = () => {
        if((USER_ID === userId) && (USER_PW === userPw)) {
            setIsLoggedIn(true);
            setResult("");
        } else{
            setIsLoggedIn(false);
            setResult("아이디와 비밀번호를 확인해주세요!!");
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
            setResult("아이디를 입력해주세요.");
            inputId.current.focus();
            return false;
        }

        if(userPw === "") {
            setResult("비밀번호를 입력해주세요.");
            inputPw.current.focus();
            return false;
        }

        onClickLogin();
    }

    return (
            <div>
                {
                    !isLoggedIn && (
                        <LoginContext.Provider
                            value={{submit, inputId, inputPw, setUserId, setUserPw, result}}>
                            <Login />
                        </LoginContext.Provider>
                    )
                }
                {
                    isLoggedIn && (
                        <LoginContext.Provider
                            value={{userId, onClickLogout}}>
                            <Logout />
                        </LoginContext.Provider>
                    )
                }
            </div>
    );
}

export default LoginPage3;