import axios from 'axios';

// ? Para crear configuracion y no repetir codigo
export const pokemonApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});
