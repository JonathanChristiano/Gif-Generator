import React, { useState, useEffect } from "react";
import axios from "axios";

const Random = () => {
    const [gif, setGif] = useState('');

    const fetchRandomGif = async () => {
        try {
            const apiKey = 'tL8IFIW116HpKvZ462UiNHFn8pt1WeWJ';
            const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;
            const { data } = await axios.get(url);
            const image = data.data.images.downsized_large.url;
            setGif(image);
        } catch (error) {
            console.error("Error fetching GIF:", error);
        }
    };

    useEffect(() => {
        fetchRandomGif();
    }, []);

    const handleClick = () => {
        fetchRandomGif();
    };

    return (
        <div className="random">
            <h3> Your gif here: </h3>
            <img width={500} src={gif} alt="gif"/>
            <button onClick={handleClick}>Generate</button>
        </div>
    );
}

export default Random;
