import { describe, test } from '@jest/globals';
import { authReducer } from '../../src/context/authReducer';
import { types } from '../../src/types/types';


describe('Pruebas en authReducer.ts', () => {
    test('Debe de retornar el estado por defecto', () => {
        const newState = authReducer({ logged: false }, {});
        expect(newState).toEqual({ logged: false });
    });

    test('Debe de llamar el login autenticar y establecer el usuario', () => {
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Francisco'
            }
        }
        const newState = authReducer({ logged: false }, action);
        expect(newState).toEqual({ logged: true, user: action.payload });
    });

    test('Debe de borrar el usuario y establecer logged en false', () => {
        const state = {
            logged: true,
            user: {
                id: '123',
                name: 'Javier'
            }
        };
        const action = { type: types.logout };
        const newState = authReducer(state, action);
        expect(newState).toEqual({ logged: false });

    });

});