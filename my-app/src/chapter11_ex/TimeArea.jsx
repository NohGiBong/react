import {useState} from "react";

function TimeArea() {
    const [time, setTime] = useState(new Date().toLocaleString());

    setTimeout(function () {
        setTime(new Date().toLocaleString());
    }, 1000);

    return <p>현재 시간: {time}</p>;
}

export default TimeArea;