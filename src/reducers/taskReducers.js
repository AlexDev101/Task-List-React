// const initState = { // Redux
//     tasks: [
        // {
        //     id: "1",
        //     title: "Comprar la cena",
        //     completed: "false"
        // },
        // {
        //     id: "2",
        //     title: "Cocinar",
        //     completed: false
        // },
        // {
        //     id: "3",
        //     title: "Cenar",
        //     completed: false
        // }
//     ],
//     hasLoaded: true,
//     hasError: false
// }

// const TaskReducer = (state = initState, action) => {
//     console.log(action);
//     if(action.type === "CREATE_TASK") {
//         const updateTask = [action.newTask, ...state.tasks];
//         return {
//             ...state,
//             tasks: updateTask
//         }
//     };
//     return state
// };

// export default TaskReducer;