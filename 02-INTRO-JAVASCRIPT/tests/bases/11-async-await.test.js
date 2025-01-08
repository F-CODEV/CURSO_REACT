import { getImage } from "../../src/bases/11-async-await";

describe('Pruebas en 11-async-await', () => {
    test('getImage debe retornar un url de la imagen', async () => {
        const url = await getImage();
        console.log(url);

        expect(typeof url).toBe('string');

    });

    test('getImage debe retornar un error si no tenemos api key', async () => {
        const resp = await getImage();
        console.log(resp);

        expect(resp).toBe('No se encotro la imagen');

    });
})