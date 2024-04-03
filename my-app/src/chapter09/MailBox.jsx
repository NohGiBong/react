function MailBox(props) {
    const unreadMessages = props.unreadMessages;

    return (
        <div>
            <h1>ㅎㅇ</h1>
            {
                unreadMessages.length > 0 &&
                <h2>
                    현재 {unreadMessages.length}개의 읽지 않은 메시지가 있습니다.
                </h2>
            }
        </div>
    );
}

function Counter3() {
    const count = 0;

    return (
        <div>
            {count && <h1>형제 카운트: {count}</h1>}
        </div>
    );
}

export default Counter3;