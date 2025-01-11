// En caso de necesitar la implementación del FetchAPI
import { jest } from '@jest/globals';
import 'whatwg-fetch';
// ? Para que las variables de entorno funcionen en ambos lados
require('dotenv').config({
    path: '.env.test'
});
// ? Cuando se hace solicitud en la parte del testing
// ! Vienen todas las variables de entorno cuidado
// ! Solo para testing
jest.mock('./src/helpers/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));

