// * VARIABLES Y CONSTANTES


// ? Si no se cambia el valor usar const
const nombre = 'Francisco';
const apellido = 'Torres';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);
if (true) {
    // ? Variable de scope solo existe dentro del if
    const nombre = 'fcodev';
    let valorDado = 6;
    console.log(valorDado, nombre);
}
console.log(valorDado);

