// import { TaskContext } from "../context/task.context"
import { useRecoilState } from "recoil"
import "../components/TaskCard.css"
import { taskListState } from "../atoms/taskListState"


function TaskCard({task}) {
    
    const [taskList, setTaskList] = useRecoilState(taskListState);

    const getUpdateTasks = (prev,updatedTask) => {
      const updatedTasks = prev.masp((task) => {
        if(task.id === updatedTask.id) return updatedTask;
        return task;
      })
      return updatedTasks;
    }

    const handleInput = (e) => {
        const updatedTask = {...task, title: e.target.value}
        setTaskList((prev) => getUpdateTasks(prev, updatedTask)); 
    }

    const handleCheck = () => {
        const updatedTask = {...task, completed: !task.completed}
        setTaskList((prev) => getUpdateTasks(prev, updatedTask));
    }

  return (
    <article className="task-card">
        <input className="card-title" value={task.title} onChange={handleInput}/>
        <input type="checkbox" checked={task.completed} onChange={handleCheck}/>
    </article>
  )
}

// const mapDispatchToProps = () => { // Con Redux
//   return {
//     updateTask: (updateTask) => {
//       disppatch({type: "UPDATE_TASK", updateTask})
//     }
//   }
// };

// export default connect(null, mapDispatchToProps)(TaskCard); // Con Redux
export default TaskCard;