import { describe, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../../src/context/AuthContext";
import { Navbar } from "../../../src/ui/components/Navbar";

// ? Para hacer el mock de useNavigate
const mockUseNavigate = jest.fn();

// ? cuando en el codigo se mande llamar el useNavigate
// ? en el test se va a llamar mockUseNavigate
jest.mock("react-router", () => ({
    // ? solo sobre escribo el valor del que me interesa
    ...jest.requireActual('react-router'),
    useNavigate: () => mockUseNavigate,
})
);

describe('Pruebas en Navbar.test.tsx', () => {

    const testContextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Francisco'
        },
        logout: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el nombre del usuario logueado', () => {
        render(
            <AuthContext.Provider value={testContextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        // screen.debug();
        expect(screen.getByText(testContextValue.user.name)).toBeTruthy();
    });

    test('Debe de llamar logout y navigate cuando se hace click en el boton', () => {
        render(
            <AuthContext.Provider value={testContextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByLabelText('logout-btn');
        fireEvent.click(logoutBtn);
        expect(testContextValue.logout).toHaveBeenCalled();
        expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });

    });

});