import useCounter from "./useCounter";

function Recommend() {
    const [count, increaseCount, decreaseCount] = useCounter(0);

    return (
        <div>
            <button onClick={increaseCount}>개추</button>
            <button onClick={decreaseCount}>비추</button>
            <h2>이 페이지를 {count}번 추천하였습니다.</h2>
        </div>
    );
}

export default Recommend;