import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    
    const [gifs, setGifts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getNewGifs = async (category) => {
        const gifs = await getGifs(category);
        setGifts(gifs);
        setIsLoading(false);
    }

    useEffect(() => {
        getNewGifs(category);
    }, []);

    return {
        gifs,
        isLoading
    }
    
}
