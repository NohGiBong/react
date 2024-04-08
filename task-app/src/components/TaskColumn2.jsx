import './TaskColumn2.css';
import TaskCard2 from './TaskCard2';

export default function TaskColumn({ title, icon, tasks, status, handleDelete, setTasks }) {
	return (
		<section className='task_column'>
			<h2 className='task_column_heading'>
				<img className='task_column_icon' src={icon} alt={title} />
				{title}
			</h2>
            {tasks.length > 0
				? tasks.map(
                    (task) =>
                        task.status === status &&
                        <TaskCard2
                            key={task.id}
                            title={task.task}
                            tags={task.tags}
                            status={status}
                            handleDelete={handleDelete}
                            id={task.id}
                            task={task}
                            setTasks={setTasks}
                        />
                )
                : null}
        </section>
    );
}