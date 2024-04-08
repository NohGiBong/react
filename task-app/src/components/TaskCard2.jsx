import Tag from './Tag2';
import deleteIcon from '../assets/delete.png';
import './TaskCard2.css';
import { useState } from 'react';

export default function TaskCard2( {title, tags, handleDelete, id, task, setTasks} ) {
    // const [selectedStatus, setSelectedStatus] = useState(status); // 선택된 상태를 저장할 상태를 추가합니다.

    // select 엘리먼트의 값이 변경될 때 호출될 함수입니다.
    // const handleStatusChange = (e) => {
    //     setSelectedStatus(e.target.value); // 선택된 값을 임시 상태에 저장합니다.
    // };
    //
    // // 변경 버튼을 클릭했을 때 호출될 함수입니다.
    // const handleSubmitStatusChange = () => {
    //     handleChangeStatus(index, selectedStatus); // 최종적으로 상태를 변경하는 로직을 처리합니다.
    // };

    const [taskData, setTaskData] = useState({
        id: task.id,
        task: task.task,
        status: task.status,
        tags: task.tags,
    });

    const statusChange = (e) => {
        const { name, value } = e.target;
        setTaskData((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const statusSubmit = (e) => {
        e.preventDefault();

        // 기존 id 값의 task 삭제
        handleDelete(id);

        // 변경된 status 값의 task 추가(=status 수정 효과)
        setTasks((prev) => {
            return [...prev, taskData];
        });
    }

    return (
        <article className='task_card'>
            <form onSubmit={statusSubmit}>
                <p className='task_text'>
                    { task.status === "done" ? (<del>{title}</del>) : title }
                    <span className='task_status2'>
                        <select className='task_status'
                                name='status'
                                value={taskData.status}
                                onChange={statusChange}
                        >
                            <option value='todo' disabled={(task.status === "todo")}>할일</option>
							<option value='doing' disabled={(task.status === "doing")}>진행중</option>
							<option value='done' disabled={(task.status === "done")}>완료</option>
                        </select>
                        <button type='submit' className='task_submit'>
                            변경
                        </button>
                    </span>
                </p>
            </form>

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
                <div className='task_delete'  onClick={() => handleDelete(id)} >
                    <img className='delete_icon' src={deleteIcon} alt='delicon' />
                </div>
            </div>
        </article>
    );
}