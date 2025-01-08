import { getHeroById } from "./08-imp-exp";


// * PROMESAS

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const hero = getHeroById(2);

//         resolve(hero);
//         // reject('No se pudo encontrar el heroe')

//     }, 1000);

// });

// promesa.then((data) => {
//     console.log('Heroe', data);
// }).catch((err) => {
//     console.warn(err);
// });

export const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (!hero) {
                reject(`No se pudo encontrar el heroe: ${id}`)

            }
            resolve(hero);

        }, 1000);

    });
}
// ? Si la funcion tiene un solo parametro y solo 1 se recibe
// getHeroByIdAsync(1)
//     .then(console.log)
//     .catch(console.warn);



