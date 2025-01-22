import { describe, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

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


describe('Pruebas en SearchPage.tsx', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrarse correctamente los valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        // screen.debug();
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar a Batman y el input con el valor del query string', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        // screen.debug();
        const input = screen.getByRole('textbox') as HTMLInputElement;
        expect(input.value).toBe('batman');
        const img = screen.getByRole('img') as HTMLImageElement;
        expect(img.src).toContain('batman');
        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('none');

    });

    test('Debe de mostrar un error si no se encuentra el heroe', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const alertDanger = screen.getByLabelText('alert-danger');
        expect(alertDanger.style.display).toBe('');
    });

    test('Debe de llamar el navigate', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.change(input, { target: { name: "searchText", value: 'superman' } });
        // console.log(input.value);
        const form = screen.getByRole('form') as HTMLFormElement;
        fireEvent.submit(form);
        expect(mockUseNavigate).toHaveBeenCalledWith("?q=superman");

    });

})

