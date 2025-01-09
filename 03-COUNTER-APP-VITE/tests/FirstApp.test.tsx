import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en  <FirstApp/>', () => {

    test('Debe hacer match con el snapshot', () => {
        const testTitle = 'Hola Soy Goku';
        const { container } = render(<FirstApp title={testTitle} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostrar el titulo en un h1', () => {
        const testTitle = 'Hola Soy Goku';
        const testIdTitle = "test-title";
        const { getByText, container, getByTestId } = render(<FirstApp title={testTitle} />);
        expect(getByText(testTitle)).toBeTruthy();
        const h1 = container.querySelector('h1');
        // ? Estricto contempla espacios en blanco
        expect(h1?.innerHTML).toBe(testTitle);
        // ? Flexible
        // expect(h1?.innerHTML).toContain(testTitle);
        expect(getByTestId(testIdTitle)).toBeTruthy();
        expect(getByTestId(testIdTitle).innerHTML).toBe(testTitle);

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const testSubtitle = 'El subtitulo';

        const { getByText } = render(<FirstApp subtitle={testSubtitle} />);
        expect(getByText(testSubtitle)).toBeTruthy();

    });

})