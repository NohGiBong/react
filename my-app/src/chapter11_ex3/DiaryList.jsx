import DiaryItem from "./DiaryItem";

function DiaryList( {diaryList, setDiaryList} ) {

    return (
        <div className="DiaryList">
            <h2>일기리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((diaryList) => (
                    <DiaryItem key={diaryList.id} diaryItem={diaryList} setDiaryItem={setDiaryList} />
                ))}
            </div>
        </div>
    );
}

export default DiaryList;