import { useContext, useEffect, useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import { TaskContext } from '../context/task.context';
import TaskCard from '../components/TaskCard';
import CreateTask from '../components/CreateTask';
import "./TasksPage.css";

function TasksPage() {
  const {tasks, getTasks, hasLoaded, hasError} = useContext(TaskContext);

  // Custom Hook - Hook personalizado por el desarrollador, para componentes similares pero diferentes resultados
  const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return {counter, increase, decrease};
  }

  const taskCounter = useCounter(); // 
  const completedCounter = useCounter(); //
  
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

          <div className='counters'>
            <div className='counter'>
              <h3 className='counter-title'>Tareas</h3>
              <div className='btns'>
                <button onClick={taskCounter.decrease}>-</button>
                <h3>{taskCounter.counter}</h3>
                <button onClick={taskCounter.increase}>+</button>
              </div>
            </div>
            <div className='counter'>
              <h3 className='counter-title'>Completadas</h3>
              <div className='btns'>
                <button onClick={completedCounter.decrease}>-</button>
                <h3>{completedCounter.counter}</h3>
                <button onClick={completedCounter.increase}>+</button>
              </div>
            </div>
          </div>

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