// * OBJETOS
// * Cuando se crea un objeto tiene un Prototype que son sus propiedades y 
// * funciones implicitas

const persona = {
    nombre: 'Francisco',
    apellido: 'Torres',
    edad: 34,
    direccion: {
        ciudad: 'Cd. Valles',
        lat: 13.61238,
        lng: 18.234172,
    },
};
// ? Creamos un objeto que se llama persona y los valores de persona
// console.log({ persona: persona });
// ? Forma corta
// console.log({ persona });
// ? En forma de tabla
// console.table(persona);
// ! Copiamos la referencia en memoria - NO se debe hacer asi
// const persona2 = persona;
// ! De esta manera SI
const persona2 = { ...persona };
persona2.nombre = 'Javier';
console.log(persona);
console.log(persona2);

