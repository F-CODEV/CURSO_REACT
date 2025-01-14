import { useForm } from "../hooks/useForm"
import { TodoI } from "./todo-reducer"


export interface TodoAddProps {
    onNewTodo: (todo: TodoI) => void,
}

export const TodoAdd = ({ onNewTodo }: TodoAddProps) => {

    const { description, onInputChange, onResetForm } = useForm({ description: '' })

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (description.length <= 1) return;

        const newTodo: TodoI = {
            id: new Date().getTime(),
            done: false,
            description,
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={(e) => onFormSubmit(e)}>
            <input type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                onChange={onInputChange}
                value={description}

            />
            <button className="btn btn-primary mt-2"
                type="submit"


            >Agregar</button>
        </form>
    )
}
