import { Fragment, useState } from 'react'
import style from './taskItem.module.css'
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import { FcRedo,FcUndo } from "react-icons/fc";

// USING REACT ICON PACKAGE FOR ICONS
// https://react-icons.github.io/react-icons/ -> for use
// https://www.npmjs.com/package/react-icons -> for install

export default function TaskItem({ task, handleTaskUpdate, handleTaskEdition , handleUndoRedo}) {
    const {
        text,
        isCompleted,
        isDeleted,
        id,
        currentIndex
    } = task || {}

    const [editedTask, setEditedTask] = useState('')
    const [isEditingTask , setIsEditingTask] = useState(false)

    const taskTextCss = isCompleted ? style.scratchedTask : style.task

    function handleSaveEditedTask() {
        if (!editedTask.trim()) {
            return alert('please add task or click cancel to exist')
        }
        handleTaskEdition(
            id,
            editedTask
        )
        setIsEditingTask(!isEditingTask)
    }

    function GetEditHandlerButtons () {

        return (
            <div className = {style.editHandlerBtns}>
                 <button
                    className={style.saveBtn}
                    onClick={handleSaveEditedTask}
                > Save
                </button>
                <GiCancel
                    className={style.deleteBtn}
                    onClick={() => setIsEditingTask(false)} 
                />
            </div>
        )

    }

    function GetButtons() {
        return (
            <div className={style.buttonWrapper}>

                <button
                    className={style.complateBtn}
                    onClick={() => handleTaskUpdate('complete', id)}
                > Complate </button>

                <AiOutlineDelete
                    className={style.deleteBtn}
                    onClick={() => handleTaskUpdate('delete', id)}
                />
                <FiEdit3
                    // class='far fa-edit'
                    className={style.deleteBtn}
                    onClick={() => setIsEditingTask(!isEditingTask)}
                />
                <FcUndo 
                    className={style.deleteBtn}
                    onClick = {() => handleUndoRedo('undo' , id)}
                    />
                <FcRedo 
                    className={style.deleteBtn}
                    onClick = {() => handleUndoRedo('redo' ,id)}
                    />

            </div>
        )
    }



    return (
        <div className={style.itemWrapper}>
            <div className={style.container}>
                {isEditingTask ? <input
                    className={style.newTaskInput}
                    onChange={
                        (e) => setEditedTask(e.target.value)
                    }
                /> :
                    <h5 className={taskTextCss}>{text[text.length-currentIndex]}</h5>}
            </div>
            {isEditingTask ? <GetEditHandlerButtons/> : <GetButtons />}
        </div>
    )
}