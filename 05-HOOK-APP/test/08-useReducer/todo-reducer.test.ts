import { describe, expect, test } from "@jest/globals";
import { ActionType, TodoAction, TodoI, todoReducer } from '../../src/08-useReducer/todo-reducer';


describe('Pruebas en todo-reducer.ts', () => {




    test('Debe regresar el estado inicial', () => {
        const testActions: TodoAction = {
            type: ActionType.other,
            payload: 1,
        }
        const testInitial = [];
        const newState = todoReducer(testInitial, testActions);
        // ? Son objetos pero puede ser toBe porque pasan por referencia
        expect(newState).toBe(testInitial);
    });

    test('Debe agregar una accion', () => {
        const testInitialState: TodoI[] = [
            { id: 1, description: 'Demo Todo', done: false }
        ];
        const testActions: TodoAction = {
            type: ActionType.add,
            payload: testInitialState[0],
        }
        const newState = todoReducer([], testActions);
        expect(newState).toStrictEqual(testInitialState);

    });
    test('Debe eliminar un todo', () => {
        const testActions: TodoAction = {
            type: ActionType.delete,
            payload: 1,
        }
        const testInitialState: TodoI[] = [
            { id: 1, description: 'Demo Todo', done: false },
            { id: 2, description: 'Demo Todo 2', done: false },
        ];
        const newState = todoReducer(testInitialState, testActions);
        expect(newState.length).toBe(1);
    });

    test('Debe realizar el toggle  del todo', () => {
        const testActions: TodoAction = {
            type: ActionType.toggle,
            payload: 2,
        }
        const testInitialState: TodoI[] = [
            { id: 1, description: 'Demo Todo', done: false },
            { id: 2, description: 'Demo Todo 2', done: false },
        ];
        const newState = todoReducer(testInitialState, testActions);
        expect(newState[1].done).toBe(true);
        const newState2 = todoReducer(newState, testActions);
        expect(newState2[1].done).toBe(false);
    });

});