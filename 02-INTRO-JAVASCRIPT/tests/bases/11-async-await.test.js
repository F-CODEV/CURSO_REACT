import { getImage } from "../../src/bases/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImage debe retornar un url de la imagen', async () => {
        const url = await getImage();
        expect(typeof url).toBe('string');

    });
})