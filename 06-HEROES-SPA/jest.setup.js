// import { jest } from '@jest/globals';
// En caso de necesitar la implementación del FetchAPI
import { TextDecoder, TextEncoder } from 'util';
// import 'whatwg-fetch';
// ? Para que las variables de entorno funcionen en ambos lados
// require('dotenv').config({
//     path: '.env.test'
// });
// ? Cuando se hace solicitud en la parte del testing
// ! Vienen todas las variables de entorno cuidado
// ! Solo para testing
// jest.mock('./src/helpers/getEnvironments', () => ({
//     getEnvironments: () => ({ ...process.env })
// }));

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

