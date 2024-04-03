import './Tag2.css';

export default function Tag2({ tagName, selectTag, selected }) {

    const tagStyle = {
        HTML: { backgroundColor: '#fda821' },
        CSS: { backgroundColor: '#15d4c8' },
        JavaScript: { backgroundColor: '#ffd12c' },
        React: { backgroundColor: '#4cdafc' },
        default: { backgroundColor: '#f9f9f9' },
    };

    return (
        <button
            type='button'
            className='tag'
            onClick={() => selectTag(tagName)}
            style={selected ? tagStyle[tagName] : tagStyle.default}
        >
            {/* 그냥 selectTag만 넘겨받으면 되는게 아니고 파라미터 값이 있어야 일치하는 걸 받아올 수 있음*/}
            {tagName}
        </button>
    );
}