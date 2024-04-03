import "./Diary.css";
import React, { useState, useEffect } from "react";
import DiaryList from "./DiaryList";
import DiaryEditor from "./DiaryEditor";
import { v4 as uuidv4} from "uuid";

function Diary() {
    const [data, setData] = useState(() => {
        const saveData = localStorage.getItem('diaryData');
        if(saveData) {
            return JSON.parse(saveData);
        } else {
            return [];
        }
    });

    useEffect(() => {
        localStorage.setItem('diaryData', JSON.stringify(data));
    }, [data]);

    const addDiary = (newDiary) => {
        setData([...data, { ...newDiary, id: uuidv4() }]);
    };

    return (
        <div className="App">
            <DiaryEditor diaryEditor={addDiary} />
            <DiaryList diaryList={data} setDiaryList={setData}/>
        </div>
    );    
}

export default Diary;