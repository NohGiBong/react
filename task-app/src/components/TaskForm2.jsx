import {useState} from 'react';
import './TaskForm2.css';
import Tag2 from "./Tag2.jsx";

export default function TaskForm2( {setTasks}) {
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
		// some - 조건을 만족하는 값이 발견되면 그 즉시 순회는 중단됨(return true)
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
						{['HTML', 'CSS', 'JavaScript', 'React'].map((tagName) => (
							<Tag2
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