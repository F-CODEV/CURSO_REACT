import { describe, test } from "@jest/globals";
import { renderHook } from "@testing-library/react";
import { act } from "react";
import { useCounter } from '../../src/hooks/useCounter';

describe('Pruebas en useCounter.ts', () => {

    test('Debe de retornar los valores por defecto', () => {
        const { result } = renderHook(() => useCounter());
        const { counter, decrement, increment, reset } = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function));
        expect(increment).toEqual(expect.any(Function));
        expect(reset).toEqual(expect.any(Function));

    });

    test('Debe generar el counter con el valor de 100', () => {
        const testValue = 100;
        const { result } = renderHook(() => useCounter(testValue));
        expect(result.current.counter).toBe(testValue);
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { increment } = result.current;
        act(() => {
            increment();
            increment(2);
        });
        // ? Debemos usar el expect asi para obtener el datos actualizado
        expect(result.current.counter).toBe(13);
    })

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement } = result.current;
        act(() => {
            decrement();
            decrement(2);
        });
        // ? Debemos usar el expect asi para obtener el datos actualizado
        expect(result.current.counter).toBe(7);
    });

    test('Debe de realizar el reset del contador', () => {
        const { result } = renderHook(() => useCounter());
        const { decrement, reset } = result.current;
        act(() => {
            decrement();
            decrement(2);
            reset();
        });
        expect(result.current.counter).toBe(10);
    })


})