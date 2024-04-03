import React, { useState, useEffect } from "react";
import PetList2 from "./PetList2";
import AddPetForm2 from "../chapter11_ex2/AddPetForm2";

function Pet2() {
    const [pets, setPets] = useState(() => {
        if(localStorage.getItem("PetData") && localStorage.getItem("PetData") != "[]") {
            return JSON.parse(localStorage.getItem("PetData"));
        } else {
            return ([
                { name: "줄리아", species: "cat", age: "5", id: 123456789 },
                { name: "라이언", species: "dog", age: "3", id: 987654321 },
                { name: "플로피", species: "rabbit", age: "2", id: 123123123 },
                { name: "길동", species: "cat", age: "1", id: 456456456 },
                { name: "진도", species: "dog", age: "6", id: 789789789 }
            ]);
        }
    });

    useEffect(() => {
        localStorage.setItem("PetData", JSON.stringify(pets));
    }, [pets]);

    useEffect(() => {
        if(localStorage.getItem("PetData")) {
            setPets(JSON.parse(localStorage.getItem("PetData")));
        }
    }, []);

    return (
        <div>
            <AddPetForm2 setPets={setPets} />
            <PetList2 setPets={setPets} pets={pets} />
        </div>
    );
}

export default Pet2;