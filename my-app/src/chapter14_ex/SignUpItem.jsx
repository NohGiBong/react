import { useContext } from "react";
import SignUpContext from "./SignUpContext";

function SignUpItem() {
    const {name, gender, result,
        handleChangeName, handleChangeGender, handleSubmit} = useContext(SignUpContext);

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type="text" value={name} onChange={handleChangeName} />
                </label>
                <br />
                <label>
                    성별:
                    <select value={gender} onChange={handleChangeGender}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <button type="submit">제출</button>
            </form>
        </>
    )
}
