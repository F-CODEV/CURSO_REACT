import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifI } from "../interfaces/search_response.interface";

const initialValue: GifI[] = [];
export const useFetchGifs = (category: string): UseFetchGifsI => {

    const [gifs, setGifs] = useState(initialValue);

    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    }

    // * Para disparar efectos secundarios
    // * P.e. cuando la categoria cambie disparar un efecto
    // ? Si las dependencias estan vacias solo se ejecuta 1 vez
    useEffect(() => {
        getImages();
    }, [])

    return {
        gifs,
        isLoading,
    }
}

export interface UseFetchGifsI {
    gifs: GifI[],
    isLoading: boolean,
}
