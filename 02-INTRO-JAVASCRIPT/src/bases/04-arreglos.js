// * ARREGLOS

// ? Forma poco comun
// const arreglo = new Array(100);
const arreglo = [1, 2, 3, 4];
// ? No se recomienda usar push porque modifica el objeto principal
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// ? Extraer cada uno de los elementos
let arreglo2 = [...arreglo, 5];
// arreglo2.push(5);

const arreglo3 = arreglo2.map((e) => e * 2)

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
