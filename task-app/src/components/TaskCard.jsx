import { useState } from "react";
import Tag from './Tag';
import deleteIcon from '../assets/delete.png';
import './TaskCard.css';

export default function TaskCard({ title, tags, handleDelete, id, task, setTasks }) {
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

		// 기존 id값의 task 삭제
		handleDelete(id);

		// 변경된 status값의 task 추가(=status 수정 효과)
		setTasks((prev) => {
			return [...prev, taskData];		// 수정된 task 기존 list에 추가
		});
	}
	
	return (
		<article className='task_card'>
			<form onSubmit={statusSubmit}>
				<p className='task_text'>
					{ task.status === "done" ? (<del>{title}</del>) : title }
					<span style={{ display: "flex", justifyContent: "flex-end" }}>
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
						<Tag tagName={tag} key={index} selected={true} />
					))}
				</div>
				<div className='task_delete' onClick={() => handleDelete(id)}>
					<img className='delete_icon' src={deleteIcon} alt='삭제 버튼' />
				</div>
			</div>
		</article>
	);
}