import { useState } from "react";
import SignUpItem from "./SignUpItem";
import SignUpContext from "./SignUpContext";

function SignUp2() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const [result, setResult] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        // alert("이름: " + name + " 성별: " + gender);
        event.preventDefault();
        setResult(`이름은 ${name}이고 성별은 ${gender} 입니다.`);
    }

    return (
        <SignUpContext.Provider value={{
            name, gender, result,
            handleChangeName, handleChangeGender, handleSubmit }}>
            <SignUpItem />
        </SignUpContext.Provider>
    );
}

export default SignUp2;







