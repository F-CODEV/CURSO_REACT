import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { CounterApp } from '../src/CounterApp';

describe('Pruebas en CounterApp.tsx', () => {
    const testValue = 100;
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<CounterApp value={testValue} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el valor inicial de 100', () => {
        render(<CounterApp value={testValue} />);
        // screen.debug();
        expect(screen.getByText(testValue)).toBeTruthy();
        expect(screen.getByRole('heading', { level: 2 }).innerHTML).toBe(`${testValue}`)
    });

    test('Debe de incrementar con el boton +1', () => {
        render(<CounterApp value={testValue} />);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('Debe de decrementar con el boton -1', () => {
        render(<CounterApp value={testValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('Debe de funcionar el boton de reset', () => {
        render(<CounterApp value={testValue} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        // fireEvent.click(screen.getByText('Reset'));
        // expect(screen.getByText(testValue)).toBeTruthy();
        // ? Otra manera
        const resetBtn = screen.getByRole('button', { name: 'btn-reset' });
        fireEvent.click(resetBtn);
        expect(screen.getByText(testValue)).toBeTruthy();
    })

});