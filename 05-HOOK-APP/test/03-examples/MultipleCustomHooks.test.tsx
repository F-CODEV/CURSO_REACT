import { describe, expect, jest, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach } from 'node:test';
import React from 'react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');



describe('Pruebas en MultipleCustomHooks.tsx', () => {

    const testPokemon = {
        id: 1,
        name: 'Bulbasur',
        sprites: {
            back_default: "https://back_default.jpg",
            back_shiny: "https://back_shiny.jpg",
            front_default: "https://front_default.jpg",
            front_shiny: "https://front_shiny.jpg",
        },
    };

    const mockIncrement = jest.fn();

    (useCounter as jest.MockedFunction<typeof useCounter>).mockReturnValue({
        counter: 1,
        decrement: jest.fn(),
        increment: mockIncrement,
        reset: jest.fn(),
    });
    // ? Se limpian resetan los mocks
    beforeEach(() => { jest.clearAllMocks() });

    test('Debe mostrar el componente por defecto', () => {

        (useFetch as jest.MockedFunction<typeof useFetch>).mockReturnValue({
            data: null,
            hasError: false,
            isLoading: true,
        });

        render(< MultipleCustomHooks />);
        // screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText('Información de Pokémon')).toBeTruthy();
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' }) as HTMLButtonElement;
        expect(nextBtn.disabled).toBe(true);

    });

    test('Debe de mostrar un pokemon', () => {

        (useFetch as jest.MockedFunction<typeof useFetch>).mockReturnValue({
            data: testPokemon,
            hasError: false,
            isLoading: false,
        });
        render(< MultipleCustomHooks />);
        // screen.debug();
        expect(screen.getByText(`#${testPokemon.id} - ${testPokemon.name}`)).toBeTruthy();
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' }) as HTMLButtonElement;
        expect(nextBtn.disabled).toBe(false);
    });

    test('Debe llamar la función de incrementar', () => {
        (useFetch as jest.MockedFunction<typeof useFetch>).mockReturnValue({
            data: testPokemon,
            hasError: false,
            isLoading: false,
        });

        render(< MultipleCustomHooks />);
        const nextBtn = screen.getByRole('button', { name: 'Siguiente' }) as HTMLButtonElement;

        fireEvent.click(nextBtn);
        expect(mockIncrement).toBeCalled();
    });

})