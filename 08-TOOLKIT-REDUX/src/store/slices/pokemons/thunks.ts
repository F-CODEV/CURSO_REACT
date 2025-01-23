// ? Peticiones http

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, SetPokemonsI, startLoagingPokemons } from "./pokemonSlice";

export interface GetPokemonsProps {
    page: number;
}

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoagingPokemons());
        // TODO:    PETICION HTTP
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        const pokeData: SetPokemonsI = {
            pokemons: data.results,
            page: page + 1

        }
        dispatch(setPokemons(pokeData))


        // dispatch(setPokemons());
    }
}