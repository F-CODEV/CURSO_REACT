// * TEMPLATE STRING


const nombre = 'Francisco';
const apellido = 'Torres';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;
const nombreCompletoV2 = `
${nombre} 
${apellido}
${1 + 1}
`;


// console.log(nombreCompleto);
// console.log(nombreCompletoV2);

// ? Cualquier variable que no iniciemos tendrá undefined
export function getSaludo(nombre) {
    return `Hola, ${nombre}`;
}
// console.log(`Este es un texto: ${getSaludo(nombre)}`);
