import { describe, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AuthContext } from '../../src/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';

describe('Pruebas en PublicRoute.tsx', () => {

    test('Debe de mostrar el componente si no esta autenticado', () => {
        const testCxtValue = {
            logged: false
        };
        // ! Se debe usar el context
        render(
            <AuthContext.Provider value={testCxtValue}>
                <PublicRoute >
                    <h1>Ruta Pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );
        expect(screen.getByText('Ruta Pública')).toBeTruthy();
    });

    test('Debe de navegar si esta autenticado', () => {
        const testCxtValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Francisco'
            }
        };
        // ? Intenta ir a login pero como ya esta autenticado
        // ? navega a la ruta principal
        render(
            <AuthContext.Provider value={testCxtValue}>
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path="login" element={
                            <PublicRoute >
                                <h1>Ruta Pública</h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={
                            <h1>Marvel</h1>
                        } />
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Marvel')).toBeTruthy();
    });

});