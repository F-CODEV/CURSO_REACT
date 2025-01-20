export interface TodoI {
    id: number,
    description: string,
    done: boolean,
}

export enum ActionType {
    add = '[TODO] add todo',
    delete = '[TODO] delete todo',
    toggle = '[TODO] toggle todo',
    other = '[TODO] no defines'

}

export interface TodoAction {
    type: ActionType,
    payload: TodoI | number
}



export const todoReducer = (initialState: TodoI[], action: TodoAction): TodoI[] => {
    switch (action.type) {
        case ActionType.add:
            return [...initialState, action.payload as TodoI];
        case ActionType.delete:
            // ? Se puede usar filter porque regresa un nuevo arreglo
            return initialState.filter((e) => e.id !== action.payload);
        case ActionType.toggle:
            return initialState.map((e) => {
                if (e.id === action.payload) {
                    return {
                        ...e,
                        done: !e.done
                    }
                }
                return e;
            })
        default:
            return initialState;
    }
}
