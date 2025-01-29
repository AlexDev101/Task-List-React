import { reCnder, screen } from "@testing-library/react";
import TasksPage from "./TasksPage";
import { TaskProviderWrapper } from "../context/task.context";
import { TaskContext } from "../context/task.context";

jest.mock("../components/HeaderComponent.jsx", () => {
    return {
        __esModule: true,
        default: () => <></>
    }
})

describe("Tasks Page", () => {

    it("Title should be 'Tasks'", () => {
        const {getByTestId} = render(
            <TaskProviderWrapper>
                <TasksPage />
            </TaskProviderWrapper>
        );
        const taskTitle = getByTestId("tasks-title").textContent;
        expect(taskTitle).toEqual("Tasks")
    });

    it("Should find 'No se ha podido obtener las tareas'", () => {
        const {getByTestId} = render(
            <TaskContext.Provider
                value={{
                    tasks: [],
                    getTasks: () => {},
                    hasError: true,
                    hasLoaded:false,
                }}
            >
                <TasksPage />
            </TaskContext.Provider>
        );
        const errorMsg = getByTestId("error-msg").textContent;
        expect(errorMsg).toEqual("No se ha podido obtener las tareas")
    });

    it("Should find 'Cargando...'", () => {
        const {getByTestId} = render(
            <TaskContext.Provider
                value={{
                    tasks: [],
                    getTasks: () => {},
                    hasError: false,
                    hasLoaded:false,
                }}
            >
                <TasksPage />
            </TaskContext.Provider>
        );
        const loadingMsg = getByTestId("loading-msg").textContent;
        expect(loadingMsg).toEqual("Cargando...")
    });

    it("Should find 'Comprar la cena'", async () => {
        const {getByTestId} = render(
            <TaskContext.Provider
                value={{
                    tasks: [
                        {
                            id: 1,
                            title: "Comprar la cena",
                            completed: false,
                        },
                        {
                            id: 2,
                            title: "Cocinar",
                            completed: false,
                        },
                        {
                            id: 3,
                            title: "Cenar",
                            completed: false,
                        }
                    ],
                    getTasks: () => {},
                    hasError: false,
                    hasLoaded: true,
                }}
            >
                <TasksPage />
            </TaskContext.Provider>
        );
        expect(await screen.findByDisplayValue("Comprar la cena")).toBeVisible;
        expect(await screen.findByDisplayValue("Cenar")).toBeVisible;
    });
    
});