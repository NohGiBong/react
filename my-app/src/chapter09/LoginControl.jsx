import { useState } from "react";
import Greeting from "./Greeting";

function LoginButton(props) {
    return (<button onClick={props.onClick}>로그인</button>)
}

function LogoutButton(props) {
    return (<button onClick={props.onClick}>로그아웃</button>)
}

function LoginControl() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    const hanldeLoginClick = () => {
        setisLoggedIn(true);
    }

    const hanldeLogoutClick = () => {
        setisLoggedIn(false);
    }

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {
                isLoggedIn
                ? <LogoutButton onClick={hanldeLogoutClick} />
                : <LoginButton onClick={hanldeLoginClick} />
            }
        </div>
    );
}

export default LoginControl;