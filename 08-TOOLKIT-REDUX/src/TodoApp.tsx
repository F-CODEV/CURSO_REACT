import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi";

export const TodoApp = () => {


    // const { data: todos, isLoading } = useGetTodosQuery();
    const [todoId, setTodoId] = useState(1)
    const { data: todo, isLoading } = useGetTodoQuery(todoId);
    console.log(todo);

    const nextTodo = () => {
        setTodoId((current) => current + 1);
    }
    const prevTodo = () => {
        if (todoId === 1) return;
        setTodoId((current) => current - 1);
    }

    return (
        <>
            <h1>Todo - RTK Query</h1>
            <hr />
            <h4>Loading: {isLoading ? 'True' : 'False'} </h4>
            <pre> {JSON.stringify(todo, null, 3)} </pre>
            <button
                onClick={prevTodo}
            >Prev Todo</button>
            <button
                onClick={() => nextTodo()}
            >Next Todo</button>
            {/* <ul>
                {
                    todos.map((e) => (
                        <li key={e.id}>
                            <strong>{e.completed ? 'Done' : 'Pending'}</strong> {e.title}
                        </li>
                    )
                    )
                }
            </ul> */}
        </>
    )
}
