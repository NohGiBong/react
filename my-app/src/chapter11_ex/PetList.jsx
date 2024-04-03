import React from "react";

function PetList({ pets, setPets }) {
    function handleDelete(id){
        alert('지울겨?');
        setPets(prev => prev.filter(pet => pet.id !== id))
    }

    return (
        <ul>
            {pets.map(pet => (
                <li key={pet.id}>
                    {pet.name}은(는) {pet.species}이고 {pet.age}살 이다.
                    <button onClick={() => handleDelete(pet.id)}>삭제</button>
                </li>
            ))}
        </ul>
    );
}

export default PetList;