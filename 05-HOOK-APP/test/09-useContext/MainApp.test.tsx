import { describe, expect, test } from "@jest/globals";
import { render, screen } from '@testing-library/react';
import React from "react";
import { MemoryRouter } from "react-router";
import { MainApp } from '../../src/09-useContext/MainApp';

describe('Pruebas en MainApp.tsx', () => {

    test('Debe de mostrar el HomePage', () => {
        render(
            <MemoryRouter >
                <MainApp />
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getByText("Home Page")).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {
        render(
            <MemoryRouter initialEntries={['/login']} >
                <MainApp />
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getByText("Login Page")).toBeTruthy();
    })

})