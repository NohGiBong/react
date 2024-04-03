import Todo from '../assets/direct-hit.png';
import './TaskColumn2.css';
import TaskCard2 from "./TaskCard2.jsx";

export default function TaskColumn2( {title, icon, tasks, status, handleDelete}) {
    return (
        <section className='task_column'>
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt='title' />
                {title}
            </h2>

            {/* eslint-disable-next-line react/prop-types */}
            {tasks.length > 0
                // eslint-disable-next-line react/prop-types
                ? tasks.map(
                    (task, index) =>
                        task.status === status &&
                        <TaskCard2
                            key={index}
                            title={task.task}
                            tags={task.tags}
                            handleDelete={handleDelete}
                            index={index}
                        />
                )
                : null}
        </section>
    );
}