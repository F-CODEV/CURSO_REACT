// * DESESTRUCTURACION DE ARREGLOS

const personajes = ['Goku', 'Vegeta', 'Trunks'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);
// ? para ignorar elementos se pone ,
const [, , p3] = personajes;
// console.log(p3);

const getArr = () => {
    return ['ABC', 123];
}

const [letras, numeros] = getArr();
// console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. El segundo setNombre
const userState = (valor) => {
    return [valor, () => {
        console.log('Hola Mundo');
    }]
}

// const arr = userState('Goku');
// console.log(arr);
// ? para llamar a la funcion
// arr[1]();

const [nombre, setNombre] = userState('Goku');

setNombre();

