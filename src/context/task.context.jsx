import { createContext, useState } from "react";

const TaskContext = createContext();

function TaskProviderWrapper(props) {
    const [tasks, setTasks] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasError, setError] = useState(false);


    const API_URL = "https://ca52f36ce13bf713b961.free.beeceptor.com/api/tasks/"; // Endpoint

    const getTasks = async () => {

        // if (hasLoaded) return; // Si el contenido ya se ha cargado, que no se vuelva a cargar

        // try {
        //     console.log("Get Tasks");
        //     const response = await fetch(API_URL);
        //     const data = await response.json();
        //     if (Array.isArray(data)) { // Se asegura que "data" se ejecute aun que este vacio
        //         setTasks(data);
        //     } else {
        //         console.error("Data is not an array", data);
        //     }
        //     setHasLoaded(true);
        //     setError(false)

        // } catch (e) {
        //     setError(true);
        // }

        setHasLoaded(true);
        setTasks([
            {
                id: "1",
                title: "Comprar la cena",
                completed: false
            },
            {
                id: "2",
                title: "Cocinar",
                completed: false
            },
            {
                id: "3",
                title: "cenar",
                completed: false
            },

        ]);
    };

    const addTask = async (newTask) => {
        try {
            await fetch(API_URL, {
                method: "POST", // Método con el que se harán modificaciones dentro de la API
                body: JSON.stringify(newTask) // Pasamos la informacion contenida de "newTask" a string JSON con el metodo "JSON.stringify()"
            });
            setTasks([newTask, ...tasks]);
        } catch (e) {
            console.log(e);
        }
    };

    const updateTask = (updateTask) => {
        const updateTasks = tasks.map((task) => {
            if (task.id !== updateTask.id) return task;
            return updateTask;
        });

        setTasks(updateTasks);
    };

    return (
        <TaskContext.Provider value={{ tasks, setTasks, getTasks, addTask, updateTask, hasLoaded, hasError }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProviderWrapper };