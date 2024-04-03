import DiaryItem2 from "./DiaryItem2";

function DiaryList2(props) {

    function handleDelete(id) {
        props.setData(prev => prev.filter(diary => diary.id !== id));
    }

    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{props.data.length}개의 일기가 있습니다.</h4>
            <div>
                {
                    props.data.map( (diary) => (
                        <div key={diary.id}>
                            <DiaryItem2 id={diary.id}
                                author={diary.author}
                                content={diary.content}
                                emotion={diary.emotion}
                                created_date={diary.created_date}
                            />
                            <button onClick={() => handleDelete(diary.id)}>삭제</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default DiaryList2;