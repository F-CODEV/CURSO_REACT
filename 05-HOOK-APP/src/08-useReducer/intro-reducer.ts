// console.log("hoo");

interface TodoI {
    id: number,
    todo: string,
    done: boolean,
}

const initialState: TodoI[] = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false
}];

// * Comunmente se usa reducer cuando tenemos un objeto


// ! Debe regresar un nuevo estado NO mutarlo
const todoReducer = (state = initialState, action?: TodoAction) => {
    if (action?.type === '[TODO] add todo') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer(initialState);
const newTodo: TodoI = {
    id: 2,
    todo: 'Recolectar piedra del poder',
    done: false,
}

enum ActionType { add = '[TODO] add todo' }

interface TodoAction {
    type?: ActionType,
    payload: TodoI
}

const addTodoAction: TodoAction = {
    type: ActionType.add,
    payload: newTodo,
}
todos = todoReducer(todos, addTodoAction)
console.log(todos);

