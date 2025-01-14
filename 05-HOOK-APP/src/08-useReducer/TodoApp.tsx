import { useTodo } from "../hooks/useTodo";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";



export const TodoApp = () => {

    const {
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount
    } = useTodo();

    return (
        <>
            <h1>Todo APP ({todosCount}), <small>pendiente: {pendingTodosCount} </small>  </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>

        </>
    )
}
