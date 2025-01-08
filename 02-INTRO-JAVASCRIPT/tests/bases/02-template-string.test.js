import { getSaludo } from '../../src/bases/02-template-string';

describe('Pruebas en 02-template-string', () => {
    test('getSaludo debe retornar "Hola Francisco"', () => {
        const name = "Hola Francisco";
        const message = getSaludo(name);
        expect(message).toBe(`Hola, ${name}`)
    });
})