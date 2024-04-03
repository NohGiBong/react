function DiaryEditor( {diaryEditor} ) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const author = event.target.author.value;
        const content = event.target.content.value;
        const emotion = event.target.emotion.value;
        const created_date = new Date().getTime();

        const newDiary = {
            author,
            content,
            emotion: parseInt(emotion, 10),
            created_date,
        };

        diaryEditor(newDiary);

        // Reset form
        event.target.reset();
    };

    return (
        <div>
            <h3 className="EditorTitle">오늘의 일기</h3>
            <form onSubmit={handleSubmit}>
                <input className="formField" type="text" name="author" placeholder="작성자" />
                <br />
                <br />
                <textarea className="formField" name="content" placeholder="내용" />
                <br />
                <br />
                <select name="emotion">
                    {Array.from({length: 5}, (_, index) => (
                        <option key={index} value={index + 1}>
                            {index + 1}
                        </option>
                    ))}
                </select>
                <br/>
                <br/>
                <button type="submit">저장하기</button>
            </form>
        </div>
    );
}

export default DiaryEditor;