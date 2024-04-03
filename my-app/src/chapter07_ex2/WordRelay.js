import { useState, useRef, useEffect } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('야호');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef(null);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    const submit = (e) => {
    e.preventDefault();
            if (word[word.length - 1] === value[0]) {
                if(value.length < 2) {
                    setResult("단어의 길이는 2글자 이상")
                } else {
                setResult('정답');
                setWord(value);
                setValue('');
                setScore(score + 1);
                setCount(count + 1);
                }
            } else {
                setValue('');
                setResult('오답');
                setCount(0);
                setScore((prev) => {
                    prev = prev - 1;
                    if(prev > 0) {
                        setScore(prev);
                    } else {
                        setScore(0);
                    }
                });
            }
        inputEl.current.focus();
    };

    useEffect(() => {
        document.title = `${score} 점`;
    }, [score]);

    return (
    <div>
        <div>{ word }</div>

            <form onSubmit={submit}>
                <input
                    ref={inputEl}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
                <button>입력!</button>
            </form>

        <div>{result}</div>
        {result === '정답' && <div>연속 정답 개수 : {count}</div>}
        
    </div>
    );
};

export default WordRelay;