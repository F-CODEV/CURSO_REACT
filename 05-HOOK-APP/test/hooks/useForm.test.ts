import { describe, test } from "@jest/globals";
import { act, renderHook } from "@testing-library/react";
import { useForm } from '../../src/hooks/useForm';

describe('Pruebas en useForm', () => {

    const testInitialForm = {
        name: 'Francisco',
        email: 'fcodev@mail.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm(testInitialForm));
        expect(result.current).toEqual({
            name: testInitialForm.name,
            email: testInitialForm.email,
            // formState: testInitialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });
    test('Debe de cambiar el nombre del formulario', async () => {
        const testNewName = 'Javier';
        const testTarget = { target: { name: "name", value: testNewName } };

        const { result } = renderHook(() => useForm(testInitialForm));
        const { onInputChange } = result.current;
        console.log(result.current.name);
        act(() => {
            onInputChange(testTarget);
        });
        expect(result.current.name).toBe(testNewName);


    });

    test('Debe de realizar el reset del formulario', () => {
        const { result } = renderHook(() => useForm(testInitialForm));
        const { onResetForm, onInputChange } = result.current;
        const testNewName = 'Javier';
        const testTarget = { target: { name: "name", value: testNewName } };
        act(() => {
            onInputChange(testTarget);
            onResetForm();
        });
        expect(result.current.name).toBe(testInitialForm.name);
        expect(result.current.email).toBe(testInitialForm.email);
    })

});
