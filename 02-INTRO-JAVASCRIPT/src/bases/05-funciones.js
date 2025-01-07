// * FUNCIONES


// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

// saludar = 30;

// ? La funcion es const para no sobreescribir el valor de la funcion
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


// console.log(saludar('Goku'));
// console.log(saludar2('Vegeta'));
// console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'fcodev',
    }
};
// ? Forma corta de regresar un objeto
const getUser2 = () => ({ uid: 'ABC123', username: 'fcodev' });
const user = getUser2();
console.log(user);

// Tarea
// 1. funcion de flecha
// 2. retornar un objeto implicito 
// 3. prueba
// function getActiveUser(username) {
//     return {
//         uid: 'ABC123',
//         username: username
//     }
// }

const getActiveUser = (username) => ({ uid: 'ABC123', username: username });

const activeUser = getActiveUser('fcodev.hola');
console.log(activeUser);



