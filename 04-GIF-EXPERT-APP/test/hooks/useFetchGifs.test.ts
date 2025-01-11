import { describe, expect, test } from '@jest/globals';
import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

// * Para test en custom hooks renderHook
describe('Pruebas en useFetchGifs.ts', () => {

    test('Debe regresar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { isLoading, gifs } = result.current;
        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('Debe regresar un arreglo de gifs e isLoading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('One Punch'));
        // ? Espera a que esta condicion se cumpla
        // ? el segundo parametro es opcional
        await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0),
            // {
            //     timeout:5000
            // }
        );
        const { isLoading, gifs } = result.current;
        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})