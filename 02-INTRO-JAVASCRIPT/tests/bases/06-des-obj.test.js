import { userContext } from "../../src/bases/06-des-obj";

describe('Pruebas en 06-des-obj.js', () => {
    test('userContext debe retornar un objeto', () => {
        const testPersona = {
            nombre: 'Tony',
            edad: 45,
            clave: 'Ironman',
        };
        const ctx = userContext(testPersona);

        expect(ctx).toStrictEqual({
            nombreClave: testPersona.clave,
            anios: testPersona.edad,
            latlng: {
                lat: 14.123124,
                lng: -12.2345
            }

        });
    })
})