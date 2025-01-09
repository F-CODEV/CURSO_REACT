import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en  <FirstApp/>', () => {
    const testTitle = 'Hola Soy Goku';
    const subTitle = 'El subtitulo';

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(<FirstApp title={testTitle} />);
        expect(container).toMatchSnapshot();
    });

    test('Debe mostrar el mensaje "Hola Soy Goku"', () => {


        render(<FirstApp title={testTitle} />);
        // ? Para ver el contenido del render snapshot
        // ? screen.debug();
        expect(screen.getByText(testTitle)).toBeTruthy();


    });

    test('Debe mostrar el titulo en un h1', () => {
        render(<FirstApp title={testTitle} />);
        expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(testTitle)
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        render(<FirstApp subtitle={subTitle} />);
        // ? Otra manera de comprobar si existe
        expect(screen.getAllByText(subTitle).length).toBe(1);
    });

})