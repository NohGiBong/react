function DiaryItem( { diaryItem, setDiaryItem } ) {

    const deleteDiary = (id) => {
        setDiaryItem((prevDiaryItem) => prevDiaryItem.filter(diary => diary.id !== id));
    };

    return (
        <div className="DiaryItem">
            <div className="info">
                <span>
                    작 성 자 : {diaryItem.author} | 감 정 점 수 : {diaryItem.emotion}
                </span>
                <br/>
                <span className="date">
                    시 간(ms) : {new Date(diaryItem.created_date).toLocaleString()}
                </span>
                <div className="content">
                    내 용 : {diaryItem.content}
                </div>
                <button onClick={() => deleteDiary(diaryItem.id)}>삭제</button>
            </div>
        </div>
    );
};

export default DiaryItem;