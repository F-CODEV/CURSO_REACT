import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en AddCategory.tsx', () => {
    const testValue = 'Saitama';
    const onNewCategory = jest.fn();
    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => { }} />);
        // screen.debug();
        // ?  El input es un role textbox
        const input = screen.getByRole('textbox') as HTMLInputElement;
        // ? Disparar un evento
        fireEvent.input(input, { target: { value: testValue } });
        // screen.debug();
        expect(input.value).toBe(testValue);
    });

    test('Debe llamar onNewCategory si el input tiene un valor', () => {
        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox') as HTMLInputElement;
        const form = screen.getByRole('form') as HTMLFormElement;
        fireEvent.input(input, { target: { value: testValue } });
        fireEvent.submit(form);
        // ? cuando se hace el submit el value del input se limpia
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        // ? Evalua que se mando llamar con el valor que le dimos
        expect(onNewCategory).toHaveBeenCalledWith(testValue)
    });
    test('No debe llamar el onNewCategory si el input está vacio', () => {
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form') as HTMLFormElement;

        fireEvent.submit(form);
        expect(onNewCategory).toHaveBeenCalledTimes(0)
    });

})