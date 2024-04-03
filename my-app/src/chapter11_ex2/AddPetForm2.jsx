import { useState } from "react";

function AddPetForm2(props) {
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.setPets(prev => prev.concat({ name: name, species: species, age: age, id: new Date() }));
        setName("");
        setSpecies("");
        setAge("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>새 PET을 추가하기</legend>
                <input value={name} onChange={e => setName(e.target.value)}  placeholder="이름" />
                <input value={species} onChange={e => setSpecies(e.target.value)} placeholder="종류" />
                <input value={age} onChange={e => setAge(e.target.value)} placeholder="나이" />
                <button>펫 추가</button>
            </fieldset>
        </form>
    );
}
export default AddPetForm2;