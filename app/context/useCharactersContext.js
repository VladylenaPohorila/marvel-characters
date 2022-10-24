import React, { createContext, useState, useEffect } from 'react';
import { BaseUrl } from '../utilits/getData';

export const CharactersContext = createContext(null);

export const CharactersContextProvider = ({ children }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(BaseUrl);
                const data = await res.json();
                setData(data.data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [BaseUrl]);

    return (
        <CharactersContext.Provider value={data}>
            {children}
        </CharactersContext.Provider>
    );

}