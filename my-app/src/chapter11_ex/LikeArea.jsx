import { useState } from "react";

function LikeArea() {
    const [likeCount, setLikeCount] = useState(0);

    function increaseLike() {
        setLikeCount(prev => prev + 1);
    }
    function decreaseLike() {
        setLikeCount(prev => prev > 0 ? prev - 1 : prev);
    }
    return (
        <>
            <button onClick={increaseLike}>개추</button>
            <button onClick={ decreaseLike }>비추</button>
            <h2>이 페이지를 {likeCount} 번 추천 했습니다.</h2>
        </>
    );
}

export default LikeArea;
