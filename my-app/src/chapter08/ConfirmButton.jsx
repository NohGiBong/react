import React, { useState } from "react";

function ConfirmButton() {
    const [isConfirmed, setIsconfirmed] = useState(false);

    const handleConfirm = () => {
        setIsconfirmed((preveIsConfirmed) => !preveIsConfirmed);
    }

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;