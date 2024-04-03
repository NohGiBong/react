import React from "react";

function Button(props) {
    return (
        <button className={`bg-${props.color}`}>
            <b>
                {props.children}
            </b>
        </button>
    );
}


function ConfirmDialog(props) {
    return (
        <div>
            <p>내용 확인 후 버튼 누르기</p>
            <Button color='green'>확인</Button>
        </div>
    );
}

export default ConfirmDialog;
