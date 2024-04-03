import { useState } from "react";

function WarningBanner(props) {
    if(!props.warning) {
        return null;    // 렌더링 되지 않음
    }
    return (
        <div>삐용삐용</div>
    );
}

function Mainpage() {
    const [showWarning, setshowWarning] = useState(false);

    const hanldeToggleClick = () => {
        setshowWarning(prev => !prev);
    }

    const result = `showWarning : ${showWarning}`

    return (
        <div>
            <WarningBanner warning={showWarning} />
            <p>{result}</p>
            <button onClick={hanldeToggleClick}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default Mainpage;