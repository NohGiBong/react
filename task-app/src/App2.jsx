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

    const handleDelete = (taskIndex) => {
        const newTasks = tasks.filter((task, index) => index !== taskIndex);
        setTasks(newTasks);
    };

    const handleChangeStatus = (taskIndex, newStatus) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task, index) => {
                if (index === taskIndex) {
                    return { ...task, status: newStatus };
                }
                return task;
            });
        });
    };
    

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className='app'>
            <TaskForm2 setTasks={setTasks}/>
            <main className='app_main'>
                <TaskColumn2 title='할 일' icon={todoIcon} tasks={tasks} status='todo' handleDelete={handleDelete} handleChangeStatus={handleChangeStatus}/>
                <TaskColumn2 title='진행중' icon={doingIcon} tasks={tasks} status='doing' handleDelete={handleDelete} handleChangeStatus={handleChangeStatus}/>
                <TaskColumn2 title='완 료' icon={doneIcon} tasks={tasks} status='done' handleDelete={handleDelete} handleChangeStatus={handleChangeStatus}/>
            </main>
        </div>
    );
}

