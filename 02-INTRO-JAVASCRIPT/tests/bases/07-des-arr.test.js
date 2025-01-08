import { getArr } from "../../src/bases/07-des-arr";

describe('Pruebas en 07-des-arr.test', () => {
    test('Debe retornar un arreglo string y number', () => {
        const [letter, num] = getArr();
        // ? Si siempre regresa este valor
        expect(letter).toBe('ABC');
        expect(num).toBe(123);
        // ? Si puede regresar cualquier valor
        // ? solo compruebo el tipo
        expect(typeof letter).toBe('string');
        expect(typeof num).toBe('number');

        expect(letter).toEqual(expect.any(String));
    })
})