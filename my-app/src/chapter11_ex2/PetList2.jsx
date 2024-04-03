function PetList2(props) {

    // id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = id 인 것을 제거함
    function handleDelete(id){
        props.setPets(prev => prev.filter(pet => pet.id !== id ));
    }

    return (
        <ul>
        {props.pets.map((pet) =>
            <li key={pet.id}>{pet.name}은(는) {pet.species}이고 {pet.age}살이다.
                <button onClick={() => handleDelete(pet.id)}>삭제</button>
            </li>
        )}
        </ul>
    );
}

export default PetList2;