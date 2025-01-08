import { getHeroById, getHeroByOwner } from "../../src/bases/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => {
    test('getHeroById debe de retornar un heroe por id', () => {
        const testid = 1;
        const hero = getHeroById(testid);
        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        },)
    });

    test('getHeroById debe de retornar undefined si no existe el id', () => {
        const testid = 100;
        const hero = getHeroById(testid);
        //! false tambien es falsy 
        expect(hero).toBeFalsy();
        expect(hero).toBe(undefined);
    });

    test('getHeroByOwner debe retornar un arreglo con los héros de DC', () => {
        const testOwner = 'DC';
        const testDcHeroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },

            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ];
        const heroes = getHeroByOwner(testOwner);
        expect(heroes.length).toBe(3);
        expect(heroes).toStrictEqual(testDcHeroes)
    });
    test('getHeroByOwner debe retornar un arreglo con los héros de Marvel', () => {
        const testOwner = 'Marvel';
        const heroes = getHeroByOwner(testOwner);
        expect(heroes.length).toBe(2);

    });

});