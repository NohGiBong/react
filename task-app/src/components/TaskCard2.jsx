import Tag from './Tag2';
import deleteIcon from '../assets/delete.png';
import './TaskCard2.css';
import { useState } from 'react';

export default function TaskCard2( {title, tags, status, handleDelete, index, handleChangeStatus} ) {
    const [selectedStatus, setSelectedStatus] = useState(status); // 선택된 상태를 저장할 상태를 추가합니다.

    // select 엘리먼트의 값이 변경될 때 호출될 함수입니다.
    const handleStatusChange = (e) => {
        setSelectedStatus(e.target.value); // 선택된 값을 임시 상태에 저장합니다.
    };

    // 변경 버튼을 클릭했을 때 호출될 함수입니다.
    const handleSubmitStatusChange = () => {
        handleChangeStatus(index, selectedStatus); // 최종적으로 상태를 변경하는 로직을 처리합니다.
    };
    
    
    return (
        <article className='task_card'>
                <div>
                    <p className='task_text'>{title}</p>
                </div>

                <div className='task_status2'>
                    <select className='task_status' name='status' onChange={handleStatusChange} value={selectedStatus}>
                        <option value='todo'>할일</option>
                        <option value='doing'>진행중</option>
                        <option value='done'>완료</option>
                    </select>
                    <button type='button' className='task_submit' onClick={handleSubmitStatusChange}>변경</button>
                </div>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                    {tags.map((tag, index) => (
                        <Tag
                            tagName={tag}
                            key={index}
                            selected={true}
                        />
                    ))}
                    
                </div>
                <div className='task_delete'>
                    <img className='delete_icon' src={deleteIcon} alt='delicon'  onClick={() => handleDelete(index)} />
                </div>
            </div>
        </article>
    );
}