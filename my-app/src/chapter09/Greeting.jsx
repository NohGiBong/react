function UserGreeting() {
    return <h1>ㄹㅎㅇ</h1>;
}

function GuestGreeting() {
    return <h1>가입 좀</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting;