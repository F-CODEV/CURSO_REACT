import { getHeroByIdAsync } from "../../src/bases/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroByIdAsync Debe retornar un heroe por id', (done) => {
        const testId = 1;
        getHeroByIdAsync(testId).then((hero) => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },);
            done();
        });

    });

    test('getHeroByIdAsync debe obtener un error si el id no existe', (done) => {
        const testId = 100;
        // ? Pudiera solo llevar solo la parte del catch
        getHeroByIdAsync(testId)
            .then((hero) => {
                expect(hero).toBeFalsy();
                done();
            })
            .catch((error) => {
                expect(error).toBe(`No se pudo encontrar el heroe: ${testId}`);
                done();
            });

    });
})