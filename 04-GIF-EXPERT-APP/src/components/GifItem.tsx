import { GifI } from "../interfaces/search_response.interface"

export const GifItem = ({ title, url }: GifI) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
