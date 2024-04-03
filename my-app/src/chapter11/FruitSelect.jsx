import { useState } from "react";
function FruitSelect() {
    const [value, setValue] = useState('grape');
    const [text, setText] = useState("포도");
    const handleChange = (event) => {
        setValue(event.target.value);
        // 현재 선택된 인덱스의 값
        const selectedIndex = event.target.selectedIndex;
        // 현재 선택된 인덱스의 text
        setText(event.target.options[selectedIndex].textContent);
    }
    const handleSubmit = (event) => {
        alert("선택한 과일: " + value + " " + text);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                과일을 선택하세요:
                <select multiple={true} value={value} onChange={handleChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="watermelon">수박</option> </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}
    export default FruitSelect;