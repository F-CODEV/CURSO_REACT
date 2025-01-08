// * DESESTRUCTURACION / ASIGNACIÓN DESESTRUCTURANTE

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
};

//? Se puede asignar otro nombre de variable
const { nombre: name, edad, clave } = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(name);
// console.log(edad);
// console.log(clave);
// ? Se pueden desestructurar los parametros de la funcion
// ? Asignar valores por defecto
export const userContext = ({ nombre, edad, rango = 'Capitán', clave }) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.123124,
            lng: -12.2345
        }

    }
}

// ? no es tan comun
// const { nombreClave, anios, latlng: { lat, lng } } = userContext(persona);
const { nombreClave, anios, latlng } = userContext(persona);
const { lat, lng } = latlng;
// console.log(nombreClave, anios);
// console.log(lat, lng);



