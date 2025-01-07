// * OPERADOR CONDICIONAL TERNARIO

const activo = true;

// let mensaje = '';
// if (activo) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }

const mensaje = (activo) ? 'Activo' : 'Inactivo';
const mensaje2 = (!activo) ? 'Activo' : null;
// ? Regresa string o false
const mensaje3 = (!activo) && 'Activo';

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);
