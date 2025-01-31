import { useEffect, useState } from 'react'; 
import HeaderComponent from '../components/HeaderComponent';
import TaskCard from '../components/TaskCard';
import CreateTask from '../components/CreateTask';
import "./TasksPage.css";
import { useRecoilValue } from 'recoil';

import { taskListState } from '../atoms/taskListState'

function TasksPage() { 
  

  const hasLoaded = true; // Con Recoil
  const hasError = false; // Con Recoil
  const tasks = useRecoilValue(taskListState); // Con Recoil

  const [ renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  })

  // Custom Hook - Hook personalizado por el desarrollador, para componentes similares pero diferentes resultados
  const useCounter = () => {
    const [counter, setCounter] = useState(0);
    const increase = () => setCounter(counter + 1);
    const decrease = () => setCounter(counter - 1);

    return {counter, increase, decrease};
  }

  const taskCounter = useCounter(); // 
  const completedCounter = useCounter(); //
  
  // useEffect(() => { // Nada más que se monte el componente
  //   getTasks() // Que se ejecute esta función
  // }, [])

  const taskCards = tasks.map((task) => (
    <li key={task.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ))

  return (
    <>
        <HeaderComponent></HeaderComponent>
        {/* <h2>{renderCount}</h2> */}
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

// const mapStateProps = (state) => {
//   return {
//     tasks: state.tasks,
//     hasError: state.hasError,
//     hasLoaded: state.hasLoaded
//   }
// }

// export default connect(mapStateProps)(TasksPage);
export default TasksPage;