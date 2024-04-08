import './App2.css';
import TaskForm2 from "./components/TaskForm2.jsx";
import TaskColumn2 from "./components/TaskColumn2.jsx";

import todoIcon from './assets/direct-hit.png';
import doingIcon from './assets/glowing-star.png';
import doneIcon from './assets/check-mark-button.png';
import {useEffect, useState} from "react";

const saveTasks = localStorage.getItem('tasks');

export default function App2() {
    const [tasks, setTasks] = useState(JSON.parse(saveTasks) || []);

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => id !== id);
        setTasks(newTasks);
    };

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className='app'>
            <TaskForm2 setTasks={setTasks}/>
            <main className='app_main'>
                <TaskColumn2 title='할 일' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} setTasks={setTasks} />
                <TaskColumn2 title='진행중' icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} setTasks={setTasks} />
                <TaskColumn2 title='완 료' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} setTasks={setTasks} />
            </main>
        </div>
    );
}

