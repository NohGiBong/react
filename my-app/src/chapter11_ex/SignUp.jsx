import { useState } from "react";



function SignUp(){

    const formControlStyle = {
        height: '40px',
        padding: '0.375rem 0.75rem',
        fontSize: '1rem',
        lineHeight: '1.5',
        border: '1px solid #ced4da',
        borderRadius: '0.25rem',
        marginLeft: '8px',
    };

    const [name, setName] = useState("");
    const [gender, setGender] = useState("공격헬기");

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (event) => {
        alert("이름: " + name + ", 성별: " + gender);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChange} style={formControlStyle} />
            </label>
            <br />
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleGenderChange} style={formControlStyle} >
                    <option value="공격헬기">공격헬기</option>
                    <option value="안드로진">안드로진</option>
                    <option value="에이젠더">에어젠더</option>
                    <option value="젠더플럭스">젠더플럭스</option>
                </select>
            </label>
            <br />
            <br />
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;