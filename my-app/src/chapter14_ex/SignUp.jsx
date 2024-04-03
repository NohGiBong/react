import {useState } from "react";
import SignUpItem from "./SignUpItem";
import SignUpContext from "./SignUpContext";

const [name, setName] = useState("");
const [gender, setGender] = useState(""); const [result, setResult] = useState("");
function SignUp2() {
    }
    const handleChangeName = (event) => {
    }
    setName (event.target.value);
    const handleChangeGender = (event) => { setGender (event.target.value);
    }
    const handleSubmit = (event) => { // alert("O: "+name+" event.preventDefault();
        + gender);
        setResult(`이름은 ${name}이고 성별은 ${gender} 입니다.`);
    }

return (

)