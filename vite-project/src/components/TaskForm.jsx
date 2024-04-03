import React, { useState } from 'react';
import './TaskForm.css';
import Tag from './Tag';

// eslint-disable-next-line react/prop-types
export default function TaskForm( {setTasks} ) {

    const [taskData, setTaskData] = useState({
		task: '',
		status: 'todo',
        tags: [],
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		setTasks((prev) => {
			return [...prev, taskData]; //새 task 추가
		});
		// TaskData를 리셋하기
		setTaskData({
			task: '',
			status: 'todo',
			tags: [],
		});
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData((prev) => {
			return { ...prev, [name]: value };
		});
	};

   //선택한 태그를 tags에 추가한다. (있으면 삭제 없으면 추가)
	const selectTag = (tag) => {
		if (taskData.tags.some((item) => item === tag)) {
			const filterTags = taskData.tags.filter((item) => item !== tag);
			setTaskData((prev) => {
				return { ...prev, tags: filterTags };
			});
		} else {
			setTaskData((prev) => {
				return { ...prev, tags: [...prev.tags, tag] };
			});
		}
	};
	console.log(taskData.tags); //태그 선택을 확인


    //선택된 태그아이템중 tag가 있으면 true 없으면 false
	const checkTag = (tag) => {
		return taskData.tags.some((item) => item === tag);
	};

	return (
		<header className='app_header'>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					onChange={handleChange}
					value={taskData.task}
					name='task'
					className='task_input'
					placeholder='Enter your task'
				/>

				<div className='task_form_bottom_line'>
                    <div>
                        {['HTML', 'CSS', 'JavaScript', 'REACT'].map((tagName) => (
                            <Tag
                                key={tagName}
                                tagName={tagName}
                                selectTag={() => selectTag(tagName)}
								selected={checkTag(tagName)}
                            />
                        ))}
                    </div>
					<div>
						<select
							className='task_status'
							name='status'
							value={taskData.status}
							onChange={handleChange}
						>
							<option value='todo'>할일</option>
							<option value='doing'>진행중</option>
							<option value='done'>완료</option>
						</select>
						<button type='submit' className='task_submit'>
							+ 추가
						</button>
					</div>
				</div>
			</form>
		</header>
	);
}