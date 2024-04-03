import React from "react";

function TimeArea() {
    return (
        <p>현재 시간: {new Date().toLocaleString()}</p>
    );
}

export default TimeArea;