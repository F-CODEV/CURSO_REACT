import { describe, test } from '@jest/globals';
import { types } from '../../src/types/types';

describe('Pruebas en types', () => {
    test('Debe de regresar estos types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        });
    });
});