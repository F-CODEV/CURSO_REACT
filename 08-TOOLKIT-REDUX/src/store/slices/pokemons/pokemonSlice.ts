import { createSlice } from '@reduxjs/toolkit';

export interface PokemonState {
    page: number,
    pokemons: [],
    isLoading: boolean,
}

const initialState: PokemonState = {
    page: 0,
    pokemons: [],
    isLoading: false,
}


export interface SetPokemonsI {
    page: number,
    pokemons: []
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {

        startLoagingPokemons: (state) => {
            // ? SIN toolkit
            // return {
            //     ...state,
            //     isLoading:true,
            // }
            // ? Con toolkit puedo hacerlo asi
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
        /*
                increment: (state) => {
                    state.counter += 1
                },
                incrementByAmount: (state, action: PayloadAction<number>) => {
                    state.counter += action.payload
                },
        */
    },
});

export const { startLoagingPokemons, setPokemons } = pokemonSlice.actions;