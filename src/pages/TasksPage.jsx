import { useContext, useEffect } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { TaskContext } from '../context/task.context';
import TaskCard from '../components/TaskCard';
import CreateTask from '../components/CreateTask';
import "./TasksPage.css";

function TasksPage() {
  const {tasks, getTasks, hasLoaded, hasError} = useContext(TaskContext);

  useEffect(() => { // Nada más que se monte el componente
    getTasks() // Que se ejecute esta función
  }, [])

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ))

  return (
    <>
        <HeaderComponent></HeaderComponent>
        <section id='tasks-page'>
          <h2 className='title'data-testid="tasks-title">Tasks</h2>
          <ul className="task-list">
            <li>
              <CreateTask></CreateTask>
            </li>
            {hasError ? ( // Si tenemos un error, que cargue el siguiente <h2></h2>
              <h2 data-testid="error-msg">No se ha podido obtener las tareas</h2>
            ) : !hasLoaded ? ( // Si no tenemos un error pero no a cargado, se mostrará el <h2></h2>
              <h2 data-testid="loading-msg">Cargando...</h2>
            ) : ( // Si no se da ninguna de las dos condiciones entonces cargará "taskList"
              taskCards
            )}
            {taskCards}
          </ul>
        </section>
    </>
  )
}

export default TasksPage