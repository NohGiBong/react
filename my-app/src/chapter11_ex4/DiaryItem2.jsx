
function DiaryItem2(props) {
    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작 성 자 : {props.author} | 감 정 점 수 : {props.emotion}
                </span>
                <br />
                <span className="date">
                    시 간(ms) : {new Date(props.created_date).toLocaleString()}
                </span>
                <div className="content">
                    내 용 : {props.content}
                </div>
            </div>
        </div>
    );
};

export default DiaryItem2;