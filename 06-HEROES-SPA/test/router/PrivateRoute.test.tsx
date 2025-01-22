import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../src/context/AuthContext";
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Pruebas en PrivateRoute.tsx', () => {
    test('Debe de mostrar el children si esta autenticado', () => {
        // ? Para simular el localStorage
        Storage.prototype.setItem = jest.fn();

        const testCxtValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Francisco'
            }
        };
        render(
            <AuthContext.Provider value={testCxtValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute >
                        <h1>Ruta Privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman');

    });

});