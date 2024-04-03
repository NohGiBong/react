import { useState } from "react";

function Reservation() {
    const [haveBreakFast, setHaveBreakFast] = useState(true);
    const [numberOfGuest, setNumberOfGuest] = useState(2);

    const handleSubmit = (e) => {
        alert(`밥은 먹고 다니냐?: ${haveBreakFast ? '밥 묵니?' : '안 먹슴다'},
                혼자 왔니?: ${numberOfGuest}`);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                아침 식사 여부:
                <input type="checkbox" checked={haveBreakFast}
                    onChange={(event) => {
                        setHaveBreakFast(event.target.checked);
                    }} />
            </label>
            <br/>
            <label>
                방문객 수:
                <input type="number" value={numberOfGuest}
                    onChange={(event) => {
                        setNumberOfGuest(event.target.value);
                    }} />
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default Reservation;