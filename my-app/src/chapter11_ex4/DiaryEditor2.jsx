import { useState } from "react";
import { v4 as uuidv4} from "uuid";

function DiaryEditor2(props) {
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [emotion, setEmotion] = useState("1");

    function handleSubmit(e) {
        e.preventDefault();
        props.setData(prev =>
            prev.concat(
                { id: uuidv4(),
                    author: author, content: content, emotion: emotion,
                    created_date: new Date()
                })
        );
        // 입력란 비우기
        setAuthor("");
        setContent("");
        setEmotion("1");
    }

    return (
        <div>
            <h3>오늘의 일기</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="작성자" value={author}
                    onChange={e => setAuthor(e.target.value) } />
                <br />
                <textarea placeholder="내용" value={content}
                    onChange={e => setContent(e.target.value) } />
                <br />
                <select value={emotion} onChange={e => setEmotion(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <br />
                <button type="submit">저장하기</button>
            </form>
        </div>
    );
} 

export default DiaryEditor2;