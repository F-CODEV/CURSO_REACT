import { Convert, GifI } from "../interfaces/search_response.interface";
import { getEnvironments } from "./getEnvironments";

export const getGifs = async (category: string): Promise<GifI[]> => {
    const { VITE_GPHY_API_KEY: apiKey } = getEnvironments();
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=10&q=${category}`;
    const resp = await fetch(url);
    const body = await resp.json();
    return Convert.SearchResponseFromJSon(body);



}