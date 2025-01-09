import { Convert, GifI } from "../interfaces/search_response.interface";

export const getGifs = async (category: string): Promise<GifI[]> => {
    const apiKey = import.meta.env.VITE_GPHY_API_KEY;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`;
    const resp = await fetch(url);
    const body = await resp.json();
    return Convert.SearchResponseFromJSon(body);



}