import { useContext } from "react";
import LoginContext from "./LoginContext";

function Login() {
    const { submit, inputId, inputPw, setUserId, setUserPw, result }
        = useContext(LoginContext);

    return (
        <>
            <form onSubmit={submit}>
                <p>아이디 : <input ref={inputId} type="text"
                                onChange={(e) => setUserId(e.target.value)} />
                </p>
                <p>비밀번호 : <input ref={inputPw} type="password"
                                 onChange={(e) => setUserPw(e.target.value)} />
                </p>
                <button>로그인</button>
            </form>
            <p style={ {color: "red"} }>{result}</p>
        </>
    );
}

export default Login;