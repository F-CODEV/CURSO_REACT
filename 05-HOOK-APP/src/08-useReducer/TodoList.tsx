import { TodoI } from "./todo-reducer";
import { TodoItem } from "./TodoItem";

export interface TodoListProps {
    todos: TodoI[],
    onDeleteTodo: (id: number) => void,
    onToggleTodo: (id: number) => void,
}

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {
    return (
        <ul className="list-group">
            {
                todos.map((e) => (<TodoItem
                    key={e.id}
                    todo={e}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />))
            }
        </ul>
    );
}





