import { useState, useRef } from "react"
import "./CreateTask.css";
import { createId } from "../utils/utils";
import { useRecoilState } from "recoil";
import { taskListState } from "../atoms/taskListState";

function CreateTask() { 

  const [taskTitle, setTaskTitle] = useState("");
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const newTaskInputRef = useRef(); // "useRef" nos permite referenciar un elemento html para poder modificar el valor del componente sin que este se tenga que renderizar

  const handleInput = (e) => {
      setTaskTitle(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      if(!taskTitle) return;

      const newTask = {
          id: createId(),
          title: taskTitle,
          completed: false
      }
      setTaskList((prev) => [newTask, ...prev]);
      setTaskTitle("");
  }

  const focus = () => {
    newTaskInputRef.current.focus();
  }

    return (
      <form className="task-form" onSubmit={handleSubmit} onClick={focus}>
          <input type="text" ref={newTaskInputRef} className="task-title" placeholder="Nueva Tarea..." value={taskTitle} onChange={handleInput}/>
          <button className="create-btn">+</button>
      </form>
    )
}


export default CreateTask;