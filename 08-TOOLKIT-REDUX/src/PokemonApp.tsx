import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemons/thunks";
import { RootState } from "./store/store";

export const PokemonApp = () => {
    const { isLoading, page, pokemons } = useSelector((state: RootState) => state.pokemons);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());

        return () => {

        }
    }, [])


    return (
        <>
            <h1>PokemonApp</h1>
            <hr />
            <span> Loading: {isLoading ? 'True' : ' False'}  </span>
            <ul>
                {
                    pokemons.map((e) => (<li key={e.name}>{e.name}</li>))
                }
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >Next</button>
        </>
    )
}
