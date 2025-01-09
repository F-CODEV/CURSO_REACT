import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }: GifGridProps) => {

    const { gifs, isLoading } = useFetchGifs(category);




    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    gifs.map((e) => (
                        <GifItem key={e.id}  {...e} />
                    ))
                }
            </div>
        </>
    )
}

export interface GifGridProps {
    category: string;
}
