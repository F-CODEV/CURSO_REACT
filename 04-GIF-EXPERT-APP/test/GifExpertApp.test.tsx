import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from '@testing-library/react';
import React from "react";
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en GifExpertApp.tsx', () => {
    const testValue = 'Saitama';
    const onAddCategory = jest.fn();
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />);
        // screen.debug();
        expect(container).toMatchSnapshot();

    });

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<GifExpertApp />);
        // screen.debug();
        const input = screen.getByRole('textbox') as HTMLInputElement;
        fireEvent.input(input, { target: { value: testValue } });
        expect(input.value).toBe(testValue);
    });

    test('Debe agregar una nueva categoria', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;
        fireEvent.input(input, { target: { value: testValue } });
        fireEvent.submit(form);
        // ? cuando se hace el submit el value del input se limpia
        expect(input.value).toBe('');
        const h3 = screen.getAllByRole('heading', { level: 3 });
        expect(h3.length).toBe(2);
        // expect(onAddCategory).toHaveBeenCalled()
        // expect(onAddCategory).toHaveBeenCalledTimes(1)
        // // ? Evalua que se mando llamar con el valor que le dimos
        // expect(onAddCategory).toHaveBeenCalledWith(testValue)
    });

    test('No se deben agregar categorias repetidas', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;
        const firstH3 = screen.getByRole('heading', { level: 3 });
        fireEvent.input(input, { target: { value: firstH3.textContent } });
        fireEvent.submit(form);
        const h3 = screen.getAllByRole('heading', { level: 3 });
        expect(h3.length).toBe(1);
    })

})

// ? que pasa si vuelvo a mandar la misma categoria