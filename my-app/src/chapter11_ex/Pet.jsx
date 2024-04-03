import React, { useState, useEffect } from "react";
import TimeArea from "./TimeArea";
import LikeArea from "./LikeArea";
import AddPetForm from "./AddPetForm";
import PetList from "./PetList";

function Pet() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        localStorage.setItem("PetData", JSON.stringify(pets));
    }, [pets]);

    useEffect(() => {
        if (localStorage.getItem("PetData")) {
            setPets(JSON.parse(localStorage.getItem("PetData")));
        }
    }, []);


    return (
        <>
            <TimeArea />
            <LikeArea />
            <AddPetForm setPets={setPets}/>
            <PetList pets={pets} setPets={setPets}/>
        </>
    );
}

export default Pet;