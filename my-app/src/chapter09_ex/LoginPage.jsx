
import React, { useState } from "react"; 
import Login from "./Login";

const USER_ID = "user";
const USER_PW = "1234";

function LoginPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onCheckLogin = () => {
        if((USER_ID === props.user.id) && (USER_PW=== props.user.pw )) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    
    const onClickLogout = () => { 
        setIsLoggedIn(false);
    }

    

    return (
        <div>
            <p><span></span></p>
            <Login 
                isLoggedIn={isLoggedIn}
                onCheckLogin={onCheckLogin}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
                />
            <div style={{ padding: 16 }}>액트액트리액트</div>
        </div>
    );
}

export default LoginPage;