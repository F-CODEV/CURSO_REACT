import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../src/context/AuthContext";
import { AppRouter } from '../../src/router/AppRouter';

describe('Pruebas en AppRouter.tsx', () => {



    test('Debe de mostrar el login si no esta autenticado', () => {
        render(
            <AuthContext.Provider value={{ logged: false }}>
                <MemoryRouter initialEntries={['/']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('Debe de mostrar el componente de Marvel si esta autenticado', () => {
        const testValue = { logged: true, user: { id: '123', name: 'Fco' } };
        render(
            <AuthContext.Provider value={testValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getAllByText('Marvel').length).toBe(1);

    });

});