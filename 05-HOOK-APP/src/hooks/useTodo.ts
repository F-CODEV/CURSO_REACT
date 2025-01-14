import { useEffect, useReducer } from "react";
import { ActionType, TodoAction, TodoI, todoReducer } from "../08-useReducer/todo-reducer";

const initialState: TodoI[] = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
]

const init = () => {
    const items = localStorage.getItem('todos');
    return items !== null ? JSON.parse(items) : [];
}


export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    // ? Se dispara cuando el componente se monta y cuando los todos cambian
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

        return () => {

        }
    }, [todos])

    const handleDeleteTodo = (id: number) => {
        dispatch({ type: ActionType.delete, payload: id })
    }

    const handleToggleTodo = (id: number) => {
        dispatch({ type: ActionType.toggle, payload: id })


    }


    const handleNewTodo = (todo: TodoI) => {
        // console.log({ todo });
        const addTodo: TodoAction = {
            type: ActionType.add,
            payload: todo,
        }

        dispatch(addTodo);

    }

    return {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter((e) => !e.done).length,
        todosCount: todos.length
    }
}