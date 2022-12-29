import { useState } from 'react'
import style from './todoList.module.css'
import TaskItem from '../taskItem/taskItem'

export default function TodoList() {
    const [pendingTasksCount, setPendingTaskCount] = useState(0)
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleTaskUpdate = (action, id) => {

        const tasksDetailsArry = tasks
        const taskDataIndex = tasksDetailsArry.findIndex((task => task.id === id))
        const taskData = tasksDetailsArry[taskDataIndex]
        const {
            isCompleted,
            isDeleted
        } = taskData || {}

        if (action === 'complete') {
            tasksDetailsArry[taskDataIndex].isCompleted = true
        }
        if (action === 'delete') {
            tasksDetailsArry[taskDataIndex].isDeleted = true
        }
        if (action === 'undo') {
            tasksDetailsArry[taskDataIndex].isDeleted = false
        }

        // here we will decrease Pendingtask count only once for each task 
        // if the task is already coplated or deleted , will not decreasse the count again
        if (!isCompleted && !isDeleted) {
            setPendingTaskCount(pendingTasksCount - 1)
        }
        if (action === 'undo' && !isCompleted) {
            setPendingTaskCount(pendingTasksCount + 1)
        }

        setTasks([...tasksDetailsArry])
    }

    const handleTaskAddition = () => {
        if (!newTask) {
            alert('Please add some task first')
            return
        }
        // creating 4 digit uniq id , for each task
        const id = Math.floor(Math.random() * 9000) + 1000;
        setTasks([
            ...tasks,
            {
                text: [newTask],
                isCompleted: false,
                isDeleted: false,
                id ,
                currentIndex : 1
            }
        ])
        setNewTask('')
        setPendingTaskCount(pendingTasksCount + 1)
    }

    function handleTaskEdition(id, editedTask) {
        const tasksDetailsArry = tasks
        const taskDataIndex = tasksDetailsArry.findIndex((task => task.id === id))
        tasksDetailsArry[taskDataIndex].text.push(editedTask)
        setTasks(tasksDetailsArry)
    }

    function handleUndoRedo (action , taskId) {
        const tasksDetailsArry = [...tasks]
        const taskDataIndex = tasksDetailsArry.findIndex((task => task.id === taskId))
        const taskInfo = tasksDetailsArry[taskDataIndex]
        const {currentIndex,text} = taskInfo 

        if(action === 'undo' && currentIndex === text.length){
            return alert('This was very first task')
        }
        if(action === 'redo' && currentIndex === 1 ){
            return alert('This is very latest task')

        }
        tasksDetailsArry[taskDataIndex].currentIndex = action === 'undo' ? currentIndex  + 1 : currentIndex  - 1
        setTasks(tasksDetailsArry)

    }

    return (
            <div className = {style.todoListWrapper}>
                <header className={style.header}>

                <h3 
                    className = {style.heading}
                    >Pending Tasks({pendingTasksCount})
                </h3>

                <div className = {style.inputWrapper}>
                    <input
                        className = {style.taskInput}
                        onChange={(e) => setNewTask(e.target.value)}
                        value={newTask}
                    />
                    <button
                        className = {style.addBtn}
                        onClick={handleTaskAddition}
                    >
                        Add
                    </button>
                </div>

                </header>
                <div className = {style.taskWrapper}>
                    {
                        tasks.filter(task => task.isDeleted !== true).map(task => (
                            <TaskItem
                                task={task}
                                handleTaskUpdate={handleTaskUpdate}
                                handleTaskEdition={handleTaskEdition}
                                handleUndoRedo = {handleUndoRedo}
                            />
                        ))
                    }
                </div>
               
            </div>
    )
}