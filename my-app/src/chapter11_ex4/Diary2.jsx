import "./Diary2.css";
import { useState } from "react";
import DiaryList2 from "./DiaryList2";
import DiaryEditor2 from "./DiaryEditor2";

function Diary2() {
    const [data, setData] = useState([
        {
            id: 1,
            author: "hyun",
            content: "첫번째",
            emotion: 1,
            created_date: new Date().getTime()
        },
        {
            id: 2,
            author: "jeong",
            content: "두번째",
            emotion: 2,
            created_date: new Date().getTime()
        },
        {
            id: 3,
            author: "react",
            content: "3번째",
            emotion: 3,
            created_date: new Date().getTime()
        }
    ]);

    return (
        <div className="App">
            <DiaryEditor2 setData={setData} />
            <DiaryList2 data={data} setData={setData}/>
        </div>
    );    
}

export default Diary2;