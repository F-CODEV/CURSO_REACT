// 1.
// import { heroes } from "./data/heroes";
// 2.
// import cualquierNombre from "./data/heroes";
// 3.  import por defecto más otras importaciones
import heroes from "../data/heroes";
// 4.
// import { heroes, owners } from "./data/heroes";
// 5. 

export const getHeroById = (id) => {
    return heroes.find((e) => e.id === id);
}

// console.log(getHeroById(2));

export const getHeroByOwner = (owner) => {
    return heroes.filter((e) => e.owner === owner);
}

// console.log(getHeroByOwner('DC'));
// console.log(owners);



