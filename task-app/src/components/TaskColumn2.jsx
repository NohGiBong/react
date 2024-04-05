import './TaskColumn2.css';
import TaskCard2 from "./TaskCard2.jsx";

export default function TaskColumn2( {title, icon, tasks, status, handleDelete, handleChangeStatus}) {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='title' />
                {title}
            </h2>

            {tasks.length > 0
                ? tasks.map(
                    (task, index) =>
                        task.status === status &&
                        <TaskCard2
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            status={status}
                            handleDelete={handleDelete}
                            handleChangeStatus={handleChangeStatus}
                            index={index}
                        />
                )
                : null}
        </section>
    );
}