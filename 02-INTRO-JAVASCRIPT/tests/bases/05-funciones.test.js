import { getActiveUser, getUser } from "../../src/bases/05-funciones";

describe('Pruebas en 05-funciones.js', () => {
    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'fcodev',
        }

        const user = getUser();
        //! No se puede usar toBe para objetos porque apuntan
        //! a valores diferentes de memoria
        expect(testUser).toEqual(user);

    });

    test('getActiveUser debe de retornar un objeto', () => {

        const testUsername = 'Francisco';
        const user = getActiveUser(testUsername);
        expect(testUsername).toBe(user.username);
        expect(user).toStrictEqual({ uid: 'ABC123', username: testUsername });

    })
})