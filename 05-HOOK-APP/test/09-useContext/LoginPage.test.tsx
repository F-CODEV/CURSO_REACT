import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en LoginPage.tsx ', () => {

    test('Debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
    })
    test('Debe llamar el setUser cuando se hace click', () => {

        const mockSetUser = jest.fn();
        const testuser = {
            id: 123,
            name: 'Francisco',
            email: 'fcodev@mail.com'
        };
        render(
            <UserContext.Provider value={{ user: null, setUser: mockSetUser }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const btn = screen.getByRole('button');
        fireEvent.click(btn);
        expect(mockSetUser).toHaveBeenCalledWith(testuser);
    })

})