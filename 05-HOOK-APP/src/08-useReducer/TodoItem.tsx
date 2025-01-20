import { TodoI } from "./todo-reducer"

export interface TodoItemProps {
    todo: TodoI,
    onDeleteTodo: (id: number) => void,
    onToggleTodo: (id: number) => void,
}

export const TodoItem = (
    { todo: { id, description, done }, onDeleteTodo, onToggleTodo }: TodoItemProps,
) => {
    return (
        <li key={id}
            className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${done ? 'text-decoration-line-through' : ''}`}
                onClick={() => onToggleTodo(id)}
                aria-label="span"
            > {description} </span>
            <button className="btn btn-danger"
                onClick={(e) => onDeleteTodo(id)}
            >Borrar</button>
        </li>
    )
}