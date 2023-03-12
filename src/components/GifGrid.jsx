import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            
            {
                isLoading && <h2>Loading...</h2>
            }

            <div className="card-grid">
                {
                    gifs.map(
                        gifs =>
                            <GifItem key={gifs.id} {...gifs} />
                    )
                }
            </div>
        </>
    )
}
