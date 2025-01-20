import { describe, expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import React from "react";
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en HomePage.tsx', () => {
    test('Debe mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
    })
    test('Debe mostrar el componente con el usuario', () => {
        const testUser = {
            id: 1,
            name: "Fco",
            email: "fco@mail.com",
        };
        render(
            <UserContext.Provider value={{
                user: testUser
            }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(`${testUser.id}`);
        expect(preTag.innerHTML).toContain(`${testUser.name}`);
    })
})